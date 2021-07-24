type FillPaint_3203 = unknown;
type LinePaint_3203 = unknown;
type PointPaint_3203 = unknown;
type FillLayout_3203 = unknown;
type LineLayout_3203 = unknown;
type PointLayout_3203 = unknown;
interface FillLayer_3203 {
  layout: FillLayout_3203;
  paint: FillPaint_3203;
}
interface LineLayer_3203 {
  layout: LineLayout_3203;
  paint: LinePaint_3203;
}
interface PointLayer_3203 {
  layout: PointLayout_3203;
  paint: PointPaint_3203;
}
type Layer_3203 = FillLayer_3203 | LineLayer_3203 | PointLayer_3203;
