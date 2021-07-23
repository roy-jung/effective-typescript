// tsConfig: {"noImplicitAny":false,"strictNullChecks":false}

class Greeting_6102 {
  greeting: string
  name: any
  constructor(name) {
    this.greeting = 'Hello'
    this.name = name
  }
  greet() {
    return this.greeting + ' ' + this.name
  }
}
