import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

const MapPage = (props) => {
  const onGoogleApiLoaded = ({ map, maps }) => {
    console.log(map);
  };
  return (
    <div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCev0yeTdZL7ky-9cIEQrrKZW-IT0VP8Ms" }}
        onGoogleApiLoaded={onGoogleApiLoaded}
      />
    </div>
  );
};

MapPage.propTypes = {};

export default MapPage;
