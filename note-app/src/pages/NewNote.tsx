import { Heading } from "@chakra-ui/react";
import { NoteData, Tag } from "../App";
import FormComponent from "../components/Form";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (data: Tag) => void;
  availableTags: Tag[];
};

const NewNote: React.FC<NewNoteProps> = ({
  onSubmit,
  onAddTag,
  availableTags,
}) => {
  return (
    <>
      <Heading as="h1" marginBottom="2rem">
        New Note
      </Heading>
      <FormComponent
        availableTags={availableTags}
        onSubmit={onSubmit}
        onAddTag={onAddTag}
      />
    </>
  );
};

export default NewNote;
