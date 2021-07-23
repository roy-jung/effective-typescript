class C_0410 {
  foo: string
  constructor(foo: string) {
    this.foo = foo
  }
}

const c_0410 = new C_0410('instance of C_0410')
const d: C_0410 = { foo: 'object literal' } // OK!
