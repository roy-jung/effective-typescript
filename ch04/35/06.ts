// requires node modules: @types/geojson

interface BoundingBox_3506 {
  lat: [number, number];
  lng: [number, number];
}
import {Feature_3506, Geometry_3506} from 'geojson';
declare let f_3506: Feature_3506;
function helper_3506(coordinates: any[]) {}
const {geometry_3506} = f_3506;
if (geometry_3506) {
  if (geometry_3506.type === 'GeometryCollection') {
    throw new Error('GeometryCollections are not supported.');
  }
  helper_3506(geometry_3506.coordinates);  // OK
}
