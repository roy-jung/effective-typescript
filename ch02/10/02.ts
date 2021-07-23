function getStringLen_1002(foo: String) {
  return foo.length
}

getStringLen_1002('hello') // OK
getStringLen_1002(new String('hello')) // OK
