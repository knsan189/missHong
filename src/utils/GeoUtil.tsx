import { fitBounds } from "google-map-react";
import { Center } from "../types/map";

function getMapPosFromBounds(bounds) {
  const div = window.map?.getDiv();
  const dim =
    div?.offsetWidth && div?.offsetHeight
      ? { height: div.offsetHeight, width: div.offsetWidth }
      : { height: window.innerHeight * 0.7, width: window.innerWidth * 0.7 };
  const { zoom } = fitBounds(bounds, dim);

  return { bounds, zoom };
}

function getMapPosFromGoogleGeometry(viewport) {
  const bounds = {
    ne: viewport.getNorthEast().toJSON(),
    sw: viewport.getSouthWest().toJSON(),
  };
  return getMapPosFromBounds(bounds);
}

const getMaxBounds = (places) => {
  const bounds = new window.maps.LatLngBounds();
  places.forEach(({ mapx, mapy }) => {
    if (mapx && mapy) {
      bounds.extend({ lng: parseFloat(mapx, 10), lat: parseFloat(mapy, 10) });
    }
  });
  return bounds;
};

export const getPlacesCenterZoom = (places) => {
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

export function moveMapPosition(center: Center | null, zoom) {
  if (center) {
    window.map.panTo(center);
  }
  if (zoom) {
    window.map.setZoom(zoom);
  }
}
