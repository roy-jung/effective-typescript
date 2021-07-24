type FillPaint_3204 = unknown;
type LinePaint_3204 = unknown;
type PointPaint_3204 = unknown;
type FillLayout_3204 = unknown;
type LineLayout_3204 = unknown;
type PointLayout_3204 = unknown;
interface Layer_3204 {
  type: 'fill' | 'line' | 'point';
  layout: FillLayout_3204 | LineLayout_3204 | PointLayout_3204;
  paint: FillPaint_3204 | LinePaint_3204 | PointPaint_3204;
}
