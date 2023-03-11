import { Container, Tag } from "@chakra-ui/react";
import NewNote from "./pages/NewNote";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import NoteList from "./pages/NoteList";

export type Note = {
  id: string;
} & NoteData;

export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
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
  const [tags, setTags] = useLocalStorage<Tag[]>("Tags", []);

  const notesAndTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);

  const onCreateNote = ({ tags, ...data }: NoteData) => {
    setNotes((prevNote: Tag[]) => {
      return [
        ...prevNote,
        { ...data, id: uuidv4(), tagIds: tags.map((tag) => tag.id) },
      ];
    });
  };

  const onAddTag = (tag: Tag) => {
    setTags((prev: Tag[]) => [...prev, tag]);
  };

  return (
    <Container maxWidth="1000px" marginY="3rem">
      <Routes>
        <Route
          path="/"
          element={
            <NoteList
              notes={notesAndTags}
              availableTags={tags}
              onAddTag={onAddTag}
            />
          }
        />
        <Route
          path="/new"
          element={
            <NewNote
              availableTags={tags}
              onAddTag={onAddTag}
              onSubmit={onCreateNote}
            />
          }
        />
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
