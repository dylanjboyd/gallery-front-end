import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Photo } from "../../../models/Photo";

type PhotoCardProps = {
  photo: Photo;
};

const PhotoCard = ({ photo }: PhotoCardProps) => (
  <Card sx={{ maxWidth: 345, flexGrow: 1 }}>
    <CardMedia
      component="img"
      height="140"
      image={photo.imgSrc}
      alt="Sample image"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {photo.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {photo.description}
      </Typography>
    </CardContent>
  </Card>
);

export default PhotoCard;
