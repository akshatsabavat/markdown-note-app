import {
  Heading,
  Button,
  Flex,
  Spacer,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import { useRef, useState, useMemo } from "react";
import { Note, Tag } from "../App";
import useLocalStorage from "../hooks/useLocalStorage";
import CreatableSelect from "react-select/creatable";
import { v4 as uuidv4 } from "uuid";

type NoteListProps = {
  availableTags: Tag[];
  onAddTag: (data: Tag) => void;
  notes: Note[];
};

const NoteList: React.FC<NoteListProps> = ({
  availableTags,
  onAddTag,
  notes,
}) => {
  const searchTitleRef = useRef<HTMLInputElement>(null);
  const [Tags, setTags] = useState<Tag[]>([]);
  const [title, setTitle] = useState("");

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      return (
        (title === "" ||
          note.title.toLowerCase().includes(title.toLowerCase())) &&
        (Tags.length === 0 ||
          Tags.every((tag) =>
            note.tags.some((noteTag) => noteTag.id === tag.id)
          ))
      );
    });
  }, [notes, Tags, title]);

  return (
    <>
      <Flex align="center" gap="1.5rem" justifyContent="space-between">
        <Heading as="h1">Notes</Heading>
        <Spacer />
        <Button padding="1rem" rightIcon={<AddIcon boxSize={11} />}>
          Create
        </Button>
        <Button padding="1rem" rightIcon={<EditIcon boxSize={15} />}>
          Edit Tags
        </Button>
      </Flex>
      <form>
        <Flex gap="2.5rem" marginY="2rem">
          <FormControl id="input1">
            <FormLabel>Search Note</FormLabel>
            <Input
              onChange={(e) => setTitle(e.target.value)}
              ref={searchTitleRef}
              type="text"
              name="searchTitle"
            />
            <FormHelperText>Enter the note to be searched above</FormHelperText>
          </FormControl>
          <FormControl id="input2">
            <FormLabel>Tags</FormLabel>
            <CreatableSelect
              isMulti
              onCreateOption={(label) => {
                const newTag = { id: uuidv4(), label };
                onAddTag(newTag);
                setTags((prev) => [...prev, newTag]);
              }}
              value={Tags.map((tag) => {
                return { label: tag.label, value: tag.id };
              })}
              options={availableTags.map((tag) => {
                return {
                  label: tag.label,
                  value: tag.id,
                };
              })}
              onChange={(tagArray) => {
                setTags(
                  tagArray.map((tag) => {
                    return { label: tag.label, id: tag.value };
                  })
                );
              }}
            />
            <FormHelperText>Search with tags</FormHelperText>
          </FormControl>
        </Flex>
      </form>
      <Grid templateColumns="repeat(3,1fr)">
        {filteredNotes.map((note) => {
          return <h1 key={note.id}>hi</h1>;
        })}
      </Grid>
    </>
  );
};

export default NoteList;
