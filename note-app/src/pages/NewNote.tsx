import { Heading } from "@chakra-ui/react";
import { NoteData } from "../App";
import FormComponent from "../components/Form";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
};

const NewNote: React.FC<NewNoteProps> = ({ onSubmit }) => {
  return (
    <>
      <Heading as="h1" marginBottom="2rem">
        New Note
      </Heading>
      <FormComponent onSubmit={onSubmit} />
    </>
  );
};

export default NewNote;
