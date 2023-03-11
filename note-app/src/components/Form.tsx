import {
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Textarea,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { NoteData, Tag } from "../App";
import CreatableSelect from "react-select/creatable";
import { v4 as uuidv4 } from "uuid";

type FormComponentProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (data: Tag) => void;
};

const FormComponent: React.FC<FormComponentProps> = ({
  onSubmit,
  onAddTag,
}) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [Tags, setTags] = useState<Tag[]>([]);

  const [formData, setFormData] = useState<NoteData>({
    title: "",
    markdown: "",
    tags: [],
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [],
    });
    // onSubmit(formData);
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex marginBottom="2rem" justify="space-between" gap="60px">
        <FormControl isRequired id="input1">
          <FormLabel>Title</FormLabel>
          <Input ref={titleRef} type="text" name="title" />
          <FormHelperText>Fill in the title of your note above</FormHelperText>
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
            onChange={(tagArray) => {
              setTags(
                tagArray.map((tag) => {
                  return { label: tag.label, id: tag.value };
                })
              );
            }}
          />
        </FormControl>
      </Flex>
      <FormControl id="textarea">
        <FormLabel>Body</FormLabel>
        <Textarea isRequired ref={markdownRef} height="400px" />
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FormComponent;
