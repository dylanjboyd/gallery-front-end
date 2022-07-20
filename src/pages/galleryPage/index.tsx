import Typography from "@mui/material/Typography";
import React from "react";

import FullScreenViewer from "../../components/galleryPageComponents/FullScreenViewer";
import Gallery from "../../components/galleryPageComponents/Gallery";
import { useGallery } from "../../contexts/GalleryContext";
import { Photo } from "../../models/Photo";

const GalleryPage = () => {
  const { photos, fetchPhotos } = useGallery();
  const [viewerPhoto, setViewerPhoto] = React.useState<Photo | undefined>();

  React.useEffect(() => {
    fetchPhotos();
  }, []);

  const handlePhotoClick = (photo: Photo) => {
    setViewerPhoto(photo);
  };
  return (
    <>
      <Typography variant="h2" component="h1" sx={{ mb: 4 }}>
        Your Photos
      </Typography>
      <Gallery photos={photos} onPhotoClick={handlePhotoClick}></Gallery>
      <FullScreenViewer
        photo={viewerPhoto}
        onClose={() => setViewerPhoto(undefined)}
      />
    </>
  );
};

export default GalleryPage;
