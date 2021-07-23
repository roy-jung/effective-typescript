// tsConfig: {"noImplicitThis":false}

class Foo_5808 {
  method() {
    console.log(this)
    ;[1, 2].forEach(i => {
      console.log(this)
    })
  }
}
const f_5808 = new Foo_5808()
f_5808.method()
// Always prints Foo, Foo, Foo
