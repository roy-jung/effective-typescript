interface LngLat_2907 { lng: number; lat: number; };
type LngLatLike_2907 = LngLat_2907 | { lon: number; lat: number; } | [number, number];
interface CameraOptions_2907 {
  center?: LngLatLike_2907;
  zoom?: number;
  bearing?: number;
  pitch?: number;
}
