import React from "react";
import PropTypes from "prop-types";

const FestivalList = ({ festival }) => {
  if (!festival) return null;
  return (
    <div>
      {festival.items.item.map((place) => (
        <div key={place.contentid}>{place.title}</div>
      ))}
    </div>
  );
};

FestivalList.propTypes = {
  festival: PropTypes.instanceOf(Object),
};

FestivalList.defaultProps = {
  festival: null,
};

export default FestivalList;
