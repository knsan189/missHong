import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import { Box } from "@mui/system";

const Map = (props) => {
  const onGoogleApiLoaded = ({ map, maps }) => {
    window.map = map;
    window.maps = maps;
  };
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCev0yeTdZL7ky-9cIEQrrKZW-IT0VP8Ms" }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={onGoogleApiLoaded}
        defaultCenter={{ lat: 37.479133, lng: 126.884813 }}
        defaultZoom={10}
      >
        {}
      </GoogleMapReact>
    </Box>
  );
};

Map.propTypes = {};

export default Map;
