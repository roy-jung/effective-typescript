// requires node modules: @types/geojson

interface BoundingBox_3504 {
  lat: [number, number];
  lng: [number, number];
}
import {Feature_3504} from 'geojson';

function calculateBoundingBox_3504(f: Feature_3504): BoundingBox_3504 | null {
  let box: BoundingBox_3504 | null = null;

  const helper_3504 = (coords: any[]) => {
    // ...
  };

  const {geometry_3504} = f;
  if (geometry_3504) {
    helper_3504(geometry_3504.coordinates);
                 // ~~~~~~~~~~~
                 // Property 'coordinates' does not exist on type 'Geometry'
                 //   Property 'coordinates' does not exist on type
                 //   'GeometryCollection'
  }

  return box;
}
