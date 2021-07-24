interface CameraOptions_2901 {
  center?: LngLat_2901;
  zoom?: number;
  bearing?: number;
  pitch?: number;
}
type LngLat_2901 =
  { lng: number; lat: number; } |
  { lon: number; lat: number; } |
  [number, number];
type LngLatBounds_2901 =
  {northeast: LngLat_2901, southwest: LngLat_2901} |
  [LngLat_2901, LngLat_2901] |
  [number, number, number, number];
declare function setCamera_2901(camera: CameraOptions_2901): void;
declare function viewportForBounds_2901(bounds: LngLatBounds_2901): CameraOptions_2901;
