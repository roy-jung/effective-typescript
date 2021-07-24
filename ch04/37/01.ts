interface Vector2D_3701 {
  x: number;
  y: number;
}
function calculateNorm_3701(p: Vector2D_3701) {
  return Math.sqrt(p.x * p.x + p.y * p.y);
}

calculateNorm_3701({x: 3, y: 4});  // OK, result is 5
const vec3D_3701 = {x: 3, y: 4, z: 1};
calculateNorm_3701(vec3D_3701);  // OK! result is also 5
