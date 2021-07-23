let age_0502: number
age_0502 = '12'
// ~~~ Type '"12"' is not assignable to type 'number'
age_0502 = '12' as any // OK
age_0502 += 1 // OK; at runtime, age is now "121"
