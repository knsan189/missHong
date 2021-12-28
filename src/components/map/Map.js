import React, { useCallback, useState } from "react";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { getPlacesCenterZoom, moveMapPosition } from "../../utils/GeoUtil";
import MapSidebar from "./MapSidebar";
import MapBox from "./MapBox";
import Loading from "../Loading";
import FestivalDetail from "../festival/FestivalDetail";
import { setFestivals } from "../../redux/reducers/festival";

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

  const dispatch = useDispatch();

  const onToggleSidebar = useCallback((bool) => {
    setSidebar(bool);
  }, []);

  const onClearList = useCallback(() => {
    dispatch(setFestivals(null));
  }, [dispatch]);

  return (
    <Box display="flex" flex={1} sx={{ height: "100%" }}>
      <MapBox
        sidebar={sidebar}
        onGoogleApiLoaded={onGoogleApiLoaded}
        onToggleSidebar={onToggleSidebar}
      />
      <MapSidebar
        open={sidebar}
        onToggle={onToggleSidebar}
        onClearList={onClearList}
      />
      <Loading open={loading} text="축제 불러오는중" />
      {/* <FestivalDetail /> */}
    </Box>
  );
};

Map.propTypes = {};

export default Map;
