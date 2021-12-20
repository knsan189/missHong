import React from "react";
import PropTypes from "prop-types";
import {
  Backdrop,
  Box,
  Typography,
  LinearProgress,
  linearProgressClasses,
} from "@mui/material";
import styled from "@emotion/styled";

const ProgressBox = styled(Box)(({ theme }) => ({
  width: 400,
  height: 100,
  background: theme.palette.background.default,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  flexWrap: "wrap",
}));

const StyledProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width: "100%",
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const Loading = ({ open, text }) => {
  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      open={open}
    >
      <ProgressBox>
        <Typography variant="subtitle2">{text}</Typography>
        <StyledProgress />
      </ProgressBox>
    </Backdrop>
  );
};

Loading.propTypes = {
  open: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Loading;
