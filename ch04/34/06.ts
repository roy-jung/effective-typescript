type Expression1_3406 = any;
type Expression2_3406 = number | string | any[];
type Expression4_3406 = number | string | CallExpression_3406;

type CallExpression_3406 = MathCall_3406 | CaseCall_3406 | RGBCall_3406;

interface MathCall_3406 {
  0: '+' | '-' | '/' | '*' | '>' | '<';
  1: Expression4_3406;
  2: Expression4_3406;
  length: 3;
}

interface CaseCall_3406 {
  0: 'case';
  1: Expression4_3406;
  2: Expression4_3406;
  3: Expression4_3406;
  length: 4 | 6 | 8 | 10 | 12 | 14 | 16 // etc.
}

interface RGBCall_3406 {
  0: 'rgb';
  1: Expression4_3406;
  2: Expression4_3406;
  3: Expression4_3406;
  length: 4;
}

const tests_3406: Expression4_3406[] = [
  10,
  "red",
  true,
// ~~~ Type 'true' is not assignable to type 'Expression4'
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
