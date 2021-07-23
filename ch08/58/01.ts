// tsConfig: {"noImplicitAny":false}

class Person5801 {
  first: string;
  last: string;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  getName() {
    return this.first + ' ' + this.last;
  }
}

const marie = new Person5801('Marie', 'Curie');
const personName = marie.getName();
