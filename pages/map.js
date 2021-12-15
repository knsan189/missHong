import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import Map from "../src/components/map/Map";
import useNotifier from "../src/hooks/useNotifier";
import Header from "../src/components/header/Header";

const MapPage = (props) => {
  useNotifier();
  return (
    <>
      <Header position="absolute" />
      <main>
        <Map />
      </main>
    </>
  );
};

MapPage.propTypes = {};

export default MapPage;
