import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  circle: {
    height: 24,
    width: 24,
    borderRadius: "100%",
    background: `white`,
    boxShadow: `0 0 0 0 rgba(52, 172, 224, 1)`,
    animation: `$pulse 2s infinite`,
    border: "4px solid rgba(52, 172, 224, 1)",
  },
  "@keyframes pulse": {
    "0%": {
      transform: `scale(0.95)`,
      boxShadow: `0 0 0 0 rgba(52, 172, 224, 0.7)`,
    },
    "70%": {
      transform: `scale(1)`,
      boxShadow: `0 0 0 10px rgba(52, 172, 224, 0)`,
    },
    "100%": {
      transform: `scale(0.95)`,
      boxShadow: `0 0 0 0 rgba(52, 172, 224, 0)`,
    },
  },
}));
const MarkerCurrentLocation = (props) => {
  const classes = useStyles();
  return <Box className={classes.circle} />;
};

MarkerCurrentLocation.propTypes = {};

export default MarkerCurrentLocation;
