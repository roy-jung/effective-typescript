interface Cylinder_0802 {
  radius: number
  height: number
}

const Cylinder_0802 = (radius: number, height: number) => ({ radius, height })
function calculateVolume_0802(shape: unknown) {
  if (shape instanceof Cylinder_0802) {
    shape.radius
    // ~~~~~~ Property 'radius' does not exist on type '{}'
  }
}
