type AB_0705 = 'A' | 'B'
type AB12_0705 = 'A' | 'B' | 12
// OK, {"A", "B"} is a subset of {"A", "B"}:
const ab: AB_0705 = Math.random() < 0.5 ? 'A' : 'B'
const ab12: AB12_0705 = ab // OK, {"A", "B"} is a subset of {"A", "B", 12}

declare let twelve_0705: AB12_0705
const back_0705: AB_0705 = twelve_0705
// ~~~~ Type 'AB12' is not assignable to type 'AB'
//        Type '12' is not assignable to type 'AB'
