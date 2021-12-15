import React from "react";
import PropTypes from "prop-types";
import { Button, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { closeSnackbar } from "../redux/reducers/snackbar";

const Snackbar = ({ id }) => {
  const dispatch = useDispatch();
  const onClickButton = () => {
    dispatch(closeSnackbar(id));
  };
  return (
    <IconButton onClick={onClickButton} sx={{ color: "inherit" }}>
      <CloseIcon />
    </IconButton>
  );
};

Snackbar.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Snackbar;
