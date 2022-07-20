import Box from "@mui/material/Box";

import { Photo } from "../../../models/Photo";
import PhotoCard from "../PhotoCard";

interface GalleryProps {
  photos: Photo[];
}

const Gallery = ({ photos }: GalleryProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
      {photos.map((p) => (
        <PhotoCard photo={p} key={p.imgSrc} />
      ))}
    </Box>
  );
};

export default Gallery;
