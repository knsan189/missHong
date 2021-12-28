import React from "react";
import PropTypes from "prop-types";
import {
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearFestivalDetail } from "../../redux/reducers/festival";

const FestivalDetail = () => {
  const { detail } = useSelector((state) => state.festivals);
  const dispatch = useDispatch();

  if (!detail) return null;
  const { title, firstimage, firstimage2, addr1 } = detail;
  const onClose = () => {
    dispatch(clearFestivalDetail());
  };

  console.log(detail);
  return (
    <Dialog open={Boolean(detail)} onClose={onClose}>
      <CardMedia
        image={firstimage || firstimage2 || "./images/noimage.png"}
        sx={{ height: 200 }}
      />
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography>{addr1}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default FestivalDetail;
