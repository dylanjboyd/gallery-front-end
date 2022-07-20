import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import GalleryPage from "./pages/galleryPage";

function App() {
  return (
    <Container sx={{ mt: 3 }}>
      <Routes>
        <Route path="/" element={<GalleryPage />} />
      </Routes>
    </Container>
  );
}

export default App;
