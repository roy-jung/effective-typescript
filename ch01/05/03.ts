let age_0503: number
age_0503 = '12'
// ~~~ Type '"12"' is not assignable to type 'number'
age_0503 = '12' as any // OK
function calculateAge_0503(birthDate: Date): number {
  // COMPRESS
  return 0
  // END
}

let birthDate_0503: any = '1990-01-19'
calculateAge_0503(birthDate_0503) // OK
