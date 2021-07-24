interface Vector2D_3702 {
  _brand: '2d';
  x: number;
  y: number;
}
function vec2D_3702(x: number, y: number): Vector2D_3702 {
  return {x, y, _brand: '2d'};
}
function calculateNorm_3702(p: Vector2D_3702) {
  return Math.sqrt(p.x * p.x + p.y * p.y);  // Same as before
}

calculateNorm_3702(vec2D_3702(3, 4)); // OK, returns 5
const vec3D_3702 = {x: 3, y: 4, z: 1};
calculateNorm_3702(vec3D_3702);
           // ~~~~~ Property '_brand' is missing in type...
