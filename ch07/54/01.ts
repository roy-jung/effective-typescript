const obj_5401 = {
  one: 'uno',
  two: 'dos',
  three: 'tres',
};
for (const k in obj_5401) {
  const v = obj_5401[k];
  // ~~~~~~ Element implicitly has an 'any' type
  //        because type ... has no index signature
}
