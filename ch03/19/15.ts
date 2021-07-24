interface Product_0315 {
  id: string;
  name: string;
  price: number;
}

function logProduct(product: Product_0315) {
  const id: number = product.id;
     // ~~ Type 'string' is not assignable to type 'number'
  const name: string = product.name;
  const price: number = product.price;
  console.log(id, name, price);
}
 const furby_0315: Product_0315 = {
   name: 'Furby',
   id: 630509430963,
// ~~ Type 'number' is not assignable to type 'string'
   price: 35,
 };
 logProduct(furby_0315);
