import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Avatar, Typography, useTheme } from "@mui/material";

const Marker = ({ festival }) => {
  const { title, contentid, firstimage, firstimage2 } = festival;
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        background: theme.palette.primary.light,
        maxWidth: 200,
        whiteSpace: "nowrap",
        padding: theme.spacing(0.5),
        boxShadow: theme.shadows[2],
        borderRadius: theme.shape.borderRadius,
      }}
    >
      <Avatar alt={title} src={firstimage || firstimage2} />
    </Box>
  );
};

Marker.propTypes = {
  festival: PropTypes.shape({
    title: PropTypes.string,
    contentid: PropTypes.number,
    firstimage: PropTypes.string,
    firstimage2: PropTypes.string,
  }).isRequired,
};

export default Marker;
