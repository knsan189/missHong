import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { getPlacesCenterZoom, moveMapPosition } from "../../utils/GeoUtil";
import Markers from "./Markers";

const Map = (props) => {
  const { festivals } = useSelector((state) => state.festivals);

  const onGoogleApiLoaded = ({ map, maps }) => {
    window.map = map;
    window.maps = maps;

    if (festivals) {
      const { newCenter, newZoom } = getPlacesCenterZoom(festivals.items.item);
      moveMapPosition(newCenter, newZoom);
    }
  };

  const Marker = Markers({ festivals });

  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCev0yeTdZL7ky-9cIEQrrKZW-IT0VP8Ms" }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={onGoogleApiLoaded}
        defaultCenter={{ lat: 37.479133, lng: 126.884813 }}
        defaultZoom={10}
      >
        {Marker}
      </GoogleMapReact>
    </Box>
  );
};

Map.propTypes = {};

export default Map;
