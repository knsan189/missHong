import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearFestivalDetail } from "../../redux/reducers/festival";

const SidebarDetail = (props) => {
  const { detail } = useSelector((state) => state.festivals);
  const dispatch = useDispatch();
  if (!detail) return null;
  const { title, firstimage, firstimage2, addr1 } = detail;
  const onClick = () => {
    dispatch(clearFestivalDetail());
  };
  return (
    <Paper sx={{ position: "fixed", zIndex: 1, height: "100%", width: "100%" }}>
      <Button onClick={onClick}>닫기</Button>
      {title}
    </Paper>
  );
};

SidebarDetail.propTypes = {};

export default SidebarDetail;
