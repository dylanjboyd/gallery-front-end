import Box from "@mui/material/Box";

import { Photo } from "../../../models/Photo";
import PhotoCard from "../PhotoCard";

interface GalleryProps {
  photos: Photo[];
  onPhotoClick?: (photo: Photo) => void;
}

const Gallery = ({ photos, onPhotoClick }: GalleryProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 4,
      }}
    >
      {photos.map((p) => (
        <PhotoCard
          photo={p}
          key={p.imgSrc}
          onClick={() => onPhotoClick && onPhotoClick(p)}
        />
      ))}
    </Box>
  );
};

export default Gallery;
