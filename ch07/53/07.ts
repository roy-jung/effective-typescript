class Person_5307 {
  first: string
  last: string
  constructor(public name: string) {
    ;[this.first, this.last] = name.split(' ')
  }
}
