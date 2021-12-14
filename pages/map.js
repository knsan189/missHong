import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import Map from "../src/components/map/Map";

const MapPage = (props) => {
  return (
    <main>
      <Map />
    </main>
  );
};

MapPage.propTypes = {};

export default MapPage;
