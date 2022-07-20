import Box from "@mui/material/Box";

import { Photo } from "../../../models/Photo";

interface GalleryProps {
  photos: Photo[];
  activePhoto?: Photo;
  onPhotoClick?: (photo: Photo) => void;
}

const GalleryThumbnails = ({
  photos,
  onPhotoClick,
  activePhoto,
}: GalleryProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 4,
        overflowX: "scroll",
      }}
    >
      {photos.map((p) => (
        <img
          style={{ height: 100 }}
          src={p.imgSrc}
          alt={p.title}
          key={p.imgSrc}
          onClick={() => onPhotoClick && onPhotoClick(p)}
        ></img>
      ))}
    </Box>
  );
};

export default GalleryThumbnails;
