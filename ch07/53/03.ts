enum Flavor_5303 {
  VANILLA = 'vanilla',
  CHOCOLATE = 'chocolate',
  STRAWBERRY = 'strawberry',
}

let flavor_5303 = Flavor_5303.CHOCOLATE // Type is Flavor_5303
flavor_5303 = 'strawberry'
// ~~~~~~ Type '"strawberry"' is not assignable to type 'Flavor_5303'
function scoop_5303(flavor: Flavor_5303) {
  /* ... */
}
