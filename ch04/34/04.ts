type Expression1_3404 = any;
type Expression2_3404 = number | string | any[];
const tests_3404: Expression2_3404[] = [
  10,
  "red",
  true,
// ~~~ Type 'true' is not assignable to type 'Expression2'
  ["+", 10, 5],
  ["case", [">", 20, 10], "red", "blue", "green"],  // Too many values
  ["**", 2, 31],  // Should be an error: no "**" function
  ["rgb", 255, 128, 64],
  ["rgb", 255, 0, 127, 0]  // Too many values
];
