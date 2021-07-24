type Expression1_3405 = any;
type Expression2_3405 = number | string | any[];
type FnName_3405 = '+' | '-' | '*' | '/' | '>' | '<' | 'case' | 'rgb';
type CallExpression_3405 = [FnName_3405, ...any[]];
type Expression3_3405 = number | string | CallExpression_3405;

const tests_3405: Expression3_3405[] = [
  10,
  "red",
  true,
// ~~~ Type 'true' is not assignable to type 'Expression3'
  ["+", 10, 5],
  ["case", [">", 20, 10], "red", "blue", "green"],
  ["**", 2, 31],
// ~~~~~~~~~~~ Type '"**"' is not assignable to type 'FnName'
  ["rgb", 255, 128, 64]
];
