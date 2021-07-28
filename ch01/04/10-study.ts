class C {
  foo: string
  constructor(foo: string) {
    this.foo = foo
  }
  method() {}
}

const c = new C('instance of C')
const d: C = { foo: 'object literal' } // error. 'method' 속성이 '{ foo: string; }' 형식에 없지만 'C' 형식에서 필수입니다.
const e: C = { foo: '', method() {} } // foo, method 속성이 모두 있으면 okay.

class E {
  method() {}
}
class D extends E {
  foo: string
  constructor(foo: string) {
    super()
    this.foo = foo
  }
}
const f: C = new D('') // prototype chain 상에 method가 존재하면 okay.

const g = Object.create({ method() {} }, { foo: { value: '' } }) // g: any
const h: C = g // C type 강제(assert)하여 okay.

const i: { foo: string; method: () => void } = Object.create({ method() {} }, { foo: { value: '' } })
const j: C = i // { foo, method } 타입을 강제하여 okay.
