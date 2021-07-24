interface LngLat_2906 { lng: number; lat: number; };
type LngLatLike_2906 = LngLat_2906 | { lon: number; lat: number; } | [number, number];

interface Camera_2906 {
  center: LngLat_2906;
  zoom: number;
  bearing: number;
  pitch: number;
}
interface CameraOptions_2906 extends Omit<Partial<Camera_2906>, 'center'> {
  center?: LngLatLike_2906;
}
type LngLatBounds_2906 =
  {northeast: LngLatLike_2906, southwest: LngLatLike_2906} |
  [LngLatLike_2906, LngLatLike_2906] |
  [number, number, number, number];

declare function setCamera_2906(camera: CameraOptions_2906): void;
declare function viewportForBounds_2906(bounds: LngLatBounds_2906): Camera_2906;
