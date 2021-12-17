import React, { useState } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { getPlacesCenterZoom, moveMapPosition } from "../../utils/GeoUtil";
import Markers from "./Markers";
import MapSidebar from "./MapSidebar";
import MapBox from "./MapBox";

const Map = (props) => {
  const { festivals } = useSelector((state) => state.festivals);
  const [sidebar, setSidebar] = useState(true);

  const onGoogleApiLoaded = ({ map, maps }) => {
    window.map = map;
    window.maps = maps;

    if (festivals) {
      const { newCenter, newZoom } = getPlacesCenterZoom(festivals.items.item);
      moveMapPosition(newCenter, newZoom);
    }
  };

  const onToggleSidebar = (bool) => {
    setSidebar(bool);
  };

  return (
    <Box display="flex" flex={1} sx={{ height: "100%" }}>
      <MapBox
        sidebar={sidebar}
        onGoogleApiLoaded={onGoogleApiLoaded}
        onToggleSidebar={onToggleSidebar}
      />
      <MapSidebar open={sidebar} onToggle={onToggleSidebar} />
    </Box>
  );
};

Map.propTypes = {};

export default Map;
