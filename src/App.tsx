import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { GalleryProvider } from "./contexts/GalleryContext";
import GalleryPage from "./pages/galleryPage";

function App() {
  return (
    <GalleryProvider>
      <Container sx={{ mt: 3 }}>
        <Routes>
          <Route path="/" element={<GalleryPage />} />
        </Routes>
      </Container>
    </GalleryProvider>
  );
}

export default App;
