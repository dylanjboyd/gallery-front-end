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
        mt: 1,
      }}
    >
      {photos.map((p) => (
        <img
          style={{
            height: 100,
            border: `5px solid ${
              p === activePhoto ? "LightCoral" : "DarkGray"
            }`,
            cursor: "pointer",
          }}
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
