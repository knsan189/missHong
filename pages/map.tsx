import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import { Box } from "@mui/material";
import Map from "../src/components/map/Map";
import useNotifier from "../src/hooks/useNotifier";
import Header from "../src/components/header/Header";

const MapPage = (props) => {
  useNotifier();
  return (
    <Box display="flex" flexDirection="column" sx={{ height: "100vh" }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Map />
      </main>
    </Box>
  );
};

MapPage.propTypes = {};

export default MapPage;
