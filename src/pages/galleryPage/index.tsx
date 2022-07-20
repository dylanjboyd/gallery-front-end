import { useEffect } from "react";

import Gallery from "../../components/galleryPageComponents/Gallery";
import { useGallery } from "../../contexts/GalleryContext";

const GalleryPage = () => {
  const { photos, fetchPhotos } = useGallery();
  useEffect(() => {
    fetchPhotos();
  }, []);

  return <Gallery photos={photos}></Gallery>;
};

export default GalleryPage;
