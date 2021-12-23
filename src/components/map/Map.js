import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { getPlacesCenterZoom, moveMapPosition } from "../../utils/GeoUtil";
import Markers from "./Markers";
import MapSidebar from "./MapSidebar";
import MapBox from "./MapBox";
import Loading from "../Loading";
import FestivalDetail from "../festival/FestivalDetail";

const Map = (props) => {
  const { festivals, loading } = useSelector((state) => state.festivals);
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
      <Loading open={loading} text="축제 불러오는중" />
      <FestivalDetail />
    </Box>
  );
};

Map.propTypes = {};

export default Map;
