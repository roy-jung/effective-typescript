type Expression1_3407 = any;
type Expression2_3407 = number | string | any[];
type Expression4_3407 = number | string | CallExpression_3407;

type CallExpression_3407 = MathCall_3407 | CaseCall_3407 | RGBCall_3407;

interface MathCall_3407 {
  0: '+' | '-' | '/' | '*' | '>' | '<';
  1: Expression4_3407;
  2: Expression4_3407;
  length: 3;
}

interface CaseCall_3407 {
  0: 'case';
  1: Expression4_3407;
  2: Expression4_3407;
  3: Expression4_3407;
  length: 4 | 6 | 8 | 10 | 12 | 14 | 16 // etc.
}

interface RGBCall_3407 {
  0: 'rgb';
  1: Expression4_3407;
  2: Expression4_3407;
  3: Expression4_3407;
  length: 4;
}

const tests_3407: Expression4_3407[] = [
  10,
  "red",
  true,
// ~~~ Type 'true' is not assignable to type 'Expression4_3407'
  ["+", 10, 5],
  ["case", [">", 20, 10], "red", "blue", "green"],
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  Type '["case", [">", ...], ...]' is not assignable to type 'string'
  ["**", 2, 31],
// ~~~~~~~~~~~~ Type '["**", number, number]' is not assignable to type 'string
  ["rgb", 255, 128, 64],
  ["rgb", 255, 128, 64, 73]
// ~~~~~~~~~~~~~~~~~~~~~~~~ Type '["rgb", number, number, number, number]'
//                          is not assignable to type 'string'
];
const okExpressions_3407: Expression4_3407[] = [
  ['-', 12],
// ~~~~~~~~~ Type '["-", number]' is not assignable to type 'string'
  ['+', 1, 2, 3],
// ~~~~~~~~~~~~~~ Type '["+", number, ...]' is not assignable to type 'string'
  ['*', 2, 3, 4],
// ~~~~~~~~~~~~~~ Type '["*", number, ...]' is not assignable to type 'string'
];
