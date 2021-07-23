type AB_0704 = 'A' | 'B'
type AB12_0704 = 'A' | 'B' | 12
const a_0704: AB_0704 = 'A' // OK, value 'A' is a member of the set {'A', 'B'}
const c_0704: AB_0704 = 'C'
// ~ Type '"C"' is not assignable to type 'AB'
