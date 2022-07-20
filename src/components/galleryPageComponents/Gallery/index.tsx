import { Photo } from "../../../models/Photo";
import PhotoCard from "../PhotoCard";

interface GalleryProps {
  photos: Photo[];
}

const Gallery = ({ photos }: GalleryProps) => {
  return (
    <>
      {photos.map((p) => (
        <PhotoCard photo={p} key={p.imgSrc} />
      ))}
    </>
  );
};

export default Gallery;
