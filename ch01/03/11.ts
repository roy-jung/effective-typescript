// tsConfig: {"noImplicitAny":false}

function add_0311(a: number, b: number): number
function add_0311(a: string, b: string): string

function add_0311(a, b) {
  return a + b
}

const three_0311 = add_0311(1, 2) // Type is number
const twelve_0311 = add_0311('1', '2') // Type is string
