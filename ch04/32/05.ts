type FillPaint_3205 = unknown;
type LinePaint_3205 = unknown;
type PointPaint_3205 = unknown;
type FillLayout_3205 = unknown;
type LineLayout_3205 = unknown;
type PointLayout_3205 = unknown;
interface FillLayer_3205 {
  type: 'fill';
  layout: FillLayout_3205;
  paint: FillPaint_3205;
}
interface LineLayer_3205 {
  type: 'line';
  layout: LineLayout_3205;
  paint: LinePaint_3205;
}
interface PointLayer_3205 {
  type: 'paint';
  layout: PointLayout_3205;
  paint: PointPaint_3205;
}
type Layer_3205 = FillLayer_3205 | LineLayer_3205 | PointLayer_3205;
