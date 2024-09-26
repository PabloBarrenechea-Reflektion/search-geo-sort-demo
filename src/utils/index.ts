import {PageController} from "@sitecore-search/react";

function toRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}

function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
   // Distance in kilometers
  return R * c;
}

type Coordinate = {
  lat: number;
  lon: number;
};

export function getCoordinatesFromField(fieldValue: string): Coordinate | null {
  if (!fieldValue) return null;
  const values = fieldValue.split(",");
  if ( values.length < 2 ) return null;
  return {
    lat: Number(values[0]),
    lon: Number(values[1]),
  };
}

export function getDistance(fieldValue: string): string | null {
  // First check if the field has lat and lon
  const subjectCoordinate = getCoordinatesFromField(fieldValue);
  if (!subjectCoordinate) return null;
  // Second, check if the context has lat and lon
  const { lat, lon } = PageController.getContext().getGeoLocation();
  if (!lat || !lon) return null;
  // Third, calculate
  return (haversineDistance(lat, lon, subjectCoordinate.lat, subjectCoordinate.lon)).toFixed(2);
}