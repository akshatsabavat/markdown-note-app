import {
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Textarea,
  Input,
  Select,
} from "@chakra-ui/react";
const FormComponent = () => {
  return (
    <form>
      <Flex marginBottom="2rem" justify="space-between" gap="60px">
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Fill in the title of your note above</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Tags</FormLabel>
          <Select>
            <option>Car</option>
            <option>Bus</option>
            <option>Train</option>
          </Select>
        </FormControl>
      </Flex>
      <FormControl>
        <FormLabel>Body</FormLabel>
        <Textarea height="400px" />
      </FormControl>
    </form>
  );
};

export default FormComponent;
