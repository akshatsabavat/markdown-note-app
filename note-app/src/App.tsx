import { Heading, Container } from "@chakra-ui/react";
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <Container maxWidth="1000px" marginY="3rem">
      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/new" element={<h1>NewNotePage</h1>} />
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
