import { Heading } from "@chakra-ui/react";
import { NoteData, Tag } from "../App";
import FormComponent from "../components/Form";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (data: Tag) => void;
};

const NewNote: React.FC<NewNoteProps> = ({ onSubmit, onAddTag }) => {
  return (
    <>
      <Heading as="h1" marginBottom="2rem">
        New Note
      </Heading>
      <FormComponent onSubmit={onSubmit} onAddTag={onAddTag} />
    </>
  );
};

export default NewNote;
