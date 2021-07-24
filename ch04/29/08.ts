type Feature_2908 = any;
declare function calculateBoundingBox_2908(f: Feature_2908): [number, number, number, number];
interface LngLat_2908 { lng: number; lat: number; };
type LngLatLike_2908 = LngLat_2908 | { lon: number; lat: number; } | [number, number];

interface Camera_2908 {
  center: LngLat_2908;
  zoom: number;
  bearing: number;
  pitch: number;
}
interface CameraOptions_2908 extends Omit<Partial<Camera_2908>, 'center'> {
  center?: LngLatLike_2908;
}
type LngLatBounds_2908 =
  {northeast: LngLatLike_2908, southwest: LngLatLike_2908} |
  [LngLatLike_2908, LngLatLike_2908] |
  [number, number, number, number];

declare function setCamera_2908(camera: CameraOptions_2908): void;
declare function viewportForBounds_2908(bounds: LngLatBounds_2908): Camera_2908;
function focusOnFeature_2908(f: Feature_2908) {
  const bounds = calculateBoundingBox_2908(f);
  const camera = viewportForBounds_2908(bounds);
  setCamera_2908(camera);
  const {center: {lat, lng}, zoom} = camera;  // OK
  zoom;  // Type is number
  window.location.search = `?v=@${lat},${lng}z${zoom}`;
}
