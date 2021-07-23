// tsConfig: {"noImplicitThis":false}

class Foo5808 {
  method() {
    console.log(this);
    [1, 2].forEach(i => {
      console.log(this);
    });
  }
}
const f5808 = new Foo5808();
f5808.method();
// Always prints Foo, Foo, Foo
