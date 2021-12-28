import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const SidebarTitle = (props) => {
  const { festivals } = useSelector((state) => state.festivals);

  return (
    <Box py={3} px={2}>
      <Typography variant="h6">이 지역 축제 목록 {festivals?.totalCount}개</Typography>
    </Box>
  );
};

SidebarTitle.propTypes = {};

export default SidebarTitle;
