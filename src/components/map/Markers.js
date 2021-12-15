import React from "react";
import PropTypes from "prop-types";
import Marker from "./Marker";

const Markers = ({ festivals }) => {
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

Markers.propTypes = {
  festivals: PropTypes.instanceOf(Object).isRequired,
};

export default Markers;
