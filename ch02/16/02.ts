const xs_1602 = [1, 2, 3]
const keys_1602 = Object.keys(xs_1602) // Type is string[]
for (const key in xs_1602) {
  key // Type is string
  const x = xs_1602[key] // Type is number
}
