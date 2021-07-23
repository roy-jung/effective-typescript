type Flavor_5304 = 'vanilla' | 'chocolate' | 'strawberry'

let flavor_5304: Flavor_5304 = 'chocolate' // OK
flavor_5304 = 'mint chip'
// ~~~~~~ Type '"mint chip"' is not assignable to type 'Flavor_5304'
