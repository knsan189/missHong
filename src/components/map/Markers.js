import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Marker from "./Marker";

const Markers = () => {
  const { festivals } = useSelector((state) => state.festivals);
  return (
    festivals &&
    festivals.items.item.map((festival) => {
      const { mapx, mapy } = festival;
      if (!(mapy && mapy)) return null;
      return (
        <Marker
          key={festival.contentid}
          festival={festival}
          lng={mapx}
          lat={mapy}
        />
      );
    })
  );
};

export default Markers;
