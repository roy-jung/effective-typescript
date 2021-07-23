// tsConfig: {"noImplicitThis":false}

class Foo5807 {
  method() {
    console.log(this);
    [1, 2].forEach(function (i) {
      console.log(this);
    });
  }
}
const f5807 = new Foo5807();
f5807.method();
// Prints Foo, undefined, undefined in strict mode
// Prints Foo, window, window (!) in non-strict mode
