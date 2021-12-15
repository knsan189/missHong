import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import GoogleMapReact from "google-map-react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import Markers from "./Markers";

const useStyles = makeStyles((theme) => ({
  box: {
    position: "relative",
    height: "100vh",
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: "-400px",
  },
  shift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  button: {
    position: "absolute",
    top: "50%",
    right: 0,
    minWidth: "auto",
    transform: "translateY(-50%)",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    padding: "8px 2px",
    color: theme.palette.primary.main,
    background: theme.palette.background.default,
    "&:hover": {
      color: theme.palette.primary.contrastText,
    },
  },
}));

const MapBox = ({ sidebar, onGoogleApiLoaded, onToggleSidebar }) => {
  const Marker = Markers({});
  const classes = useStyles();

  return (
    <Box className={clsx(classes.box, { [classes.shift]: sidebar })}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCev0yeTdZL7ky-9cIEQrrKZW-IT0VP8Ms" }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={onGoogleApiLoaded}
        defaultCenter={{ lat: 37.479133, lng: 126.884813 }}
        defaultZoom={10}
      >
        {Marker}
      </GoogleMapReact>
      <Button
        className={classes.button}
        variant="contained"
        onClick={() => onToggleSidebar(!sidebar)}
      >
        {sidebar ? <ArrowLeft /> : <ArrowRight />}
      </Button>
    </Box>
  );
};

MapBox.propTypes = {
  sidebar: PropTypes.bool.isRequired,
  onGoogleApiLoaded: PropTypes.func.isRequired,
  onToggleSidebar: PropTypes.func.isRequired,
};

export default MapBox;
