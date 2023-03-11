import { Container } from "@chakra-ui/react";
import NewNote from "./pages/NewNote";
import { Route, Routes, Navigate } from "react-router-dom";

export type Note = {
  id: string;
} & NoteData;

export type RawNote = {
  id: string;
};

export type RawNoteDate = {
  title: string;
  markdown: string;
  tagIds: string[];
};

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

const App = () => {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("Notes", []);
  const [tags, setTags] = useLocalStorage<RawNote[]>("Tags", []);

  return (
    <Container maxWidth="1000px" marginY="3rem">
      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};

export default App;
