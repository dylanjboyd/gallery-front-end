import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useGallery } from "../../../contexts/GalleryContext";
import { Photo } from "../../../models/Photo";
import GalleryThumbnails from "../GalleryThumbnails";

type FullScreenViewerProps = {
  photo: Photo | undefined;
  onClose: () => void;
};

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "calc(100vh - 300px)",
};

const DialogImage = ({ photo }: { photo: Photo | undefined }) => (
  <img src={photo?.fullImgSrc} alt={photo?.title} style={imageStyle}></img>
);

const FullScreenViewer = ({ photo, onClose }: FullScreenViewerProps) => {
  const theme = useTheme();
  const { photos } = useGallery();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      fullWidth={true}
      fullScreen={fullScreen}
      open={!!photo}
      onClose={onClose}
    >
      <DialogTitle>{photo?.title}</DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <DialogImage photo={photo} />
        <GalleryThumbnails photos={photos} activePhoto={photo} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default FullScreenViewer;
