interface Point_3401 {
  type: 'Point';
  coordinates: number[];
}
interface LineString_3401 {
  type: 'LineString';
  coordinates: number[][];
}
interface Polygon_3401 {
  type: 'Polygon';
  coordinates: number[][][];
}
type Geometry_3401 = Point_3401 | LineString_3401 | Polygon_3401;  // Also several others
