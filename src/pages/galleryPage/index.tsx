import Typography from "@mui/material/Typography";
import { useEffect } from "react";

import Gallery from "../../components/galleryPageComponents/Gallery";
import { useGallery } from "../../contexts/GalleryContext";

const GalleryPage = () => {
  const { photos, fetchPhotos } = useGallery();
  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <>
      <Typography variant="h2" component="h1" sx={{ mb: 4 }}>
        Your Photos
      </Typography>
      <Gallery photos={photos}></Gallery>
    </>
  );
};

export default GalleryPage;
