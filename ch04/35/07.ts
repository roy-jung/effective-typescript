// requires node modules: @types/geojson

interface BoundingBox_3507 {
  lat: [number, number];
  lng: [number, number];
}
import {Feature_3507, Geometry_3507} from 'geojson';
declare let f_3507: Feature_3507;
function helper_3507(coordinates: any[]) {}
const geometryHelper_3507 = (g: Geometry_3507) => {
  if (geometry_3507.type === 'GeometryCollection') {
    geometry_3507.geometries.forEach(geometryHelper_3507);
  } else {
    helper_3507(geometry_3507.coordinates);  // OK
  }
}

const {geometry_3507} = f_3507;
if (geometry_3507) {
  geometryHelper_3507(geometry_3507);
}
