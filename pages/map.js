import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

const MapPage = (props) => {
  return (
    <div>
      <GoogleMapReact />
    </div>
  );
};

MapPage.propTypes = {};

export default MapPage;
