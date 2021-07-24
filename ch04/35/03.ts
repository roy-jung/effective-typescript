interface BoundingBox_3503 {
  lat: [number, number];
  lng: [number, number];
}
type GeoJSONFeature_3503 = any;
function calculateBoundingBox_3503(f: GeoJSONFeature_3503): BoundingBox_3503 | null {
  let box: BoundingBox_3503 | null = null;

  const helper_3503 = (coords: any[]) => {
    // ...
  };

  const {geometry_3503} = f;
  if (geometry_3503) {
    helper_3503(geometry_3503.coordinates);
  }

  return box;
}
