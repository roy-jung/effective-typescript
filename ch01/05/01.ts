let age_0501: number
age_0501 = '12'
// ~~~ Type '"12"' is not assignable to type 'number'
age_0501 = '12' as any // OK
