// tsConfig: {"experimentalDecorators":true}

class Greeter_5310 {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  @logged_5310
  greet() {
    return "Hello, " + this.greeting;
  }
}

function logged_5310(target: any, name: string, descriptor: PropertyDescriptor) {
  const fn = target[name];
  descriptor.value = function () {
    console.log(`Calling ${name}`);
    return fn.apply(this, arguments);
  };
}

console.log(new Greeter_5310('Dave').greet());
// Logs:
// Calling greet
// Hello, Dave
