import { fitBounds } from "google-map-react";

function getMapPosFromBounds(bounds) {
  const div = window.map?.getDiv();
  const dim =
    div?.offsetWidth && div?.offsetHeight
      ? { height: div.offsetHeight, width: div.offsetWidth }
      : { height: window.innerHeight * 0.7, width: window.innerWidth * 0.7 };
  const { zoom } = fitBounds(bounds, dim);

  return { bounds, zoom };
}

const getLocation = (place) => {
  let location;
  if (place.geometry) {
    location = place.geometry.location;
  } else if (place.poi) {
    location = place.poi.location;
  } else if (place.location) {
    location = place.location;
  } else {
    location = place;
  }
  return location;
};

function getMapPosFromGoogleGeometry(viewport) {
  const bounds = {
    ne: viewport.getNorthEast().toJSON(),
    sw: viewport.getSouthWest().toJSON(),
  };

  return getMapPosFromBounds(bounds);
}

const getViewport = (place) => {
  let bound;

  if (place.geometry) {
    bound = place.geometry.viewport;
  } else if (place.poi?.viewport) {
    bound = new window.maps.LatLngBounds(
      place.poi.viewport.sw,
      place.poi.viewport.ne
    );
  } else if (place.poi?.location) {
    bound = new window.maps.LatLngBounds();
  } else {
    bound = new window.maps.LatLngBounds();
  }
  return bound;
};

const getMaxBounds = (places) => {
  const bounds = getViewport(places[0].dayPlans?.[0] || places[0]);
  places.forEach((place) => {
    if (place.dayPlans) {
      place.dayPlans.forEach((dayPlan) => bounds.extend(dayPlan.poi.location));
    } else {
      const location = getLocation(place);
      bounds.extend(location);
    }
  });
  return bounds;
};

const getPlacesCenterZoom = (places) => {
  if (places.length > 0) {
    const viewport = getMaxBounds(places);
    if (viewport) {
      const newZoom = getMapPosFromGoogleGeometry(viewport).zoom;
      const newCenter = viewport.getCenter().toJSON();
      return { newCenter, newZoom };
    }
  }
  return null;
};
