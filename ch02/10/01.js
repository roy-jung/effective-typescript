// Don't do this!
const originalCharAt_1001 = String.prototype.charAt
String.prototype.charAt = function (pos) {
  console.log(this, typeof this, pos)
  return originalCharAt_1001.call(this, pos)
}
console.log('primitive'.charAt(3))
