type FillPaint_3206 = unknown;
type LinePaint_3206 = unknown;
type PointPaint_3206 = unknown;
type FillLayout_3206 = unknown;
type LineLayout_3206 = unknown;
type PointLayout_3206 = unknown;
interface FillLayer_3206 {
  type: 'fill';
  layout: FillLayout_3206;
  paint: FillPaint_3206;
}
interface LineLayer_3206 {
  type: 'line';
  layout: LineLayout_3206;
  paint: LinePaint_3206;
}
interface PointLayer_3206 {
  type: 'paint';
  layout: PointLayout_3206;
  paint: PointPaint_3206;
}
type Layer_3206 = FillLayer_3206 | LineLayer_3206 | PointLayer_3206;
function drawLayer_3206(layer: Layer_3206) {
  if (layer.type === 'fill') {
    const {paint} = layer;  // Type is FillPaint
    const {layout} = layer;  // Type is FillLayout
  } else if (layer.type === 'line') {
    const {paint} = layer;  // Type is LinePaint
    const {layout} = layer;  // Type is LineLayout
  } else {
    const {paint} = layer;  // Type is PointPaint
    const {layout} = layer;  // Type is PointLayout
  }
}
