interface CameraOptions_2903 {
  center?: LngLat_2903;
  zoom?: number;
  bearing?: number;
  pitch?: number;
}
type LngLat_2903 =
  { lng: number; lat: number; } |
  { lon: number; lat: number; } |
  [number, number];
type LngLatBounds_2903 =
  {northeast: LngLat_2903, southwest: LngLat_2903} |
  [LngLat_2903, LngLat_2903] |
  [number, number, number, number];
