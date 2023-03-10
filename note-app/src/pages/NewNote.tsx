import { Heading } from "@chakra-ui/react";
import FormComponent from "../components/Form";

const NewNote = () => {
  return (
    <>
      <Heading as="h1" marginBottom="2rem">
        New Note
      </Heading>
      <FormComponent />
    </>
  );
};

export default NewNote;
