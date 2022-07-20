import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Photo } from "../../../models/Photo";

type PhotoCardProps = {
  photo: Photo;
  onClick?: () => void;
};

const PhotoCard = ({ photo, onClick }: PhotoCardProps) => (
  <Card sx={{ maxWidth: 345, flexGrow: 1 }}>
    <CardActionArea onClick={onClick}>
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
    </CardActionArea>
  </Card>
);

export default PhotoCard;
