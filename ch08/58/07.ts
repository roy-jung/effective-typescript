// tsConfig: {"noImplicitThis":false}

class Foo_5807 {
  method() {
    console.log(this)
    ;[1, 2].forEach(function (i) {
      console.log(this)
    })
  }
}
const f_5807 = new Foo_5807()
f_5807.method()
// Prints Foo, undefined, undefined in strict mode
// Prints Foo, window, window (!) in non-strict mode
