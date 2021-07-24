interface CameraOptions_2904 {
  center?: LngLat_2904;
  zoom?: number;
  bearing?: number;
  pitch?: number;
}
type LngLat_2904 =
  { lng: number; lat: number; } |
  { lon: number; lat: number; } |
  [number, number];
type LngLatBounds_2904 =
  {northeast: LngLat_2904, southwest: LngLat_2904} |
  [LngLat_2904, LngLat_2904] |
  [number, number, number, number];
declare function setCamera_2904(camera: CameraOptions_2904): void;
declare function viewportForBounds_2904(bounds: LngLatBounds_2904): CameraOptions_2904;
type Feature_2904 = any;
declare function calculateBoundingBox_2904(f: Feature_2904): [number, number, number, number];
