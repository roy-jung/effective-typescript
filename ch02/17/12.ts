let obj_1712: { readonly [k: string]: number } = {}
// Or Readonly<{[k: string]: number}
obj_1712.hi = 45
//  ~~ Index signature in type ... only permits reading
obj_1712 = { ...obj_1712, hi: 12 } // OK
obj_1712 = { ...obj_1712, bye: 34 } // OK
