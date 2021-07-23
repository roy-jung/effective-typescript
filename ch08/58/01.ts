// tsConfig: {"noImplicitAny":false}

class Person_5801 {
  first: string
  last: string

  constructor(first: string, last: string) {
    this.first = first
    this.last = last
  }

  getName() {
    return this.first + ' ' + this.last
  }
}

const marie = new Person_5801('Marie', 'Curie')
const personName = marie.getName()
