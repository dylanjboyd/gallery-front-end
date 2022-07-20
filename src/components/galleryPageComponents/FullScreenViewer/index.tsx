import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

import { useGallery } from "../../../contexts/GalleryContext";
import { Photo } from "../../../models/Photo";
import GalleryThumbnails from "../GalleryThumbnails";

type FullScreenViewerProps = {
  photo: Photo | undefined;
  onClose: () => void;
  onPhotoSelected: (photo: Photo) => void;
};

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "calc(100vh - 300px)",
};

const getDialogImage = () => document.getElementById("dialog-image");

const handleLoad = () => {
  // Shows the image element when it's finished loading.
  const image = getDialogImage();
  if (image) image.style.visibility = "visible";
};

const DialogImage = ({ photo }: { photo: Photo | undefined }) => (
  <img
    id="dialog-image"
    onLoad={handleLoad}
    src={photo?.fullImgSrc}
    alt={photo?.title}
    style={imageStyle}
  ></img>
);

const FullScreenViewer = ({
  photo,
  onClose,
  onPhotoSelected,
}: FullScreenViewerProps) => {
  const theme = useTheme();
  const { photos } = useGallery();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  React.useEffect(() => {
    // Hides the image element when it's still loading.
    const image = getDialogImage();
    if (image) image.style.visibility = "hidden";
  }, [photo]);

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"xl"}
      fullScreen={fullScreen}
      open={!!photo}
      onClose={onClose}
    >
      <DialogTitle>{photo?.title}</DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <DialogImage photo={photo} />
        <GalleryThumbnails
          photos={photos}
          activePhoto={photo}
          onPhotoClick={(photo) => onPhotoSelected(photo)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default FullScreenViewer;
