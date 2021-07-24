interface CameraOptions_2905 {
  center?: LngLat_2905;
  zoom?: number;
  bearing?: number;
  pitch?: number;
}
type LngLat_2905 =
  { lng: number; lat: number; } |
  { lon: number; lat: number; } |
  [number, number];
type LngLatBounds_2905 =
  {northeast: LngLat_2905, southwest: LngLat_2905} |
  [LngLat_2905, LngLat_2905] |
  [number, number, number, number];
declare function setCamera_2905(camera: CameraOptions_2905): void;
declare function viewportForBounds_2905(bounds: LngLatBounds_2905): CameraOptions_2905;
type Feature_2905 = any;
declare function calculateBoundingBox_2905(f: Feature_2905): [number, number, number, number];
function focusOnFeature_2905(f: Feature_2905) {
  const bounds_2905 = calculateBoundingBox_2905(f);
  const camera_2905 = viewportForBounds_2905(bounds_2905);
  setCamera_2905(camera_2905);
  const {center: {lat, lng}, zoom} = camera_2905;
               // ~~~      Property 'lat' does not exist on type ...
               //      ~~~ Property 'lng' does not exist on type ...
  zoom;  // Type is number | undefined
  window.location.search = `?v=@${lat},${lng}z${zoom}`;
}
