import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Photo } from "../../../models/Photo";

type FullScreenViewerProps = {
  photo: Photo | undefined;
  onClose: () => void;
};

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "60vh",
};

const FullScreenViewer = ({ photo, onClose }: FullScreenViewerProps) => {
  const theme = useTheme();
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
        <img
          src={photo?.fullImgSrc}
          alt={photo?.title}
          style={imageStyle}
        ></img>
      </DialogContent>
    </Dialog>
  );
};

export default FullScreenViewer;
