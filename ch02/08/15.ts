interface Person_0815 {
  first: string
  last: string
}
function email_0815({
  person: Person_0815,
  // ~~~~~~ Binding element 'Person' implicitly has an 'any' type
  subject: string,
  // ~~~~~~ Duplicate identifier 'string'
  //        Binding element 'string' implicitly has an 'any' type
  body: string,
  // ~~~~~~ Duplicate identifier 'string'
  //        Binding element 'string' implicitly has an 'any' type
}) {
  /* ... */
}
