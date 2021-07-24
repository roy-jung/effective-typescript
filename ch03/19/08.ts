interface Product_0308 {
  id: string;
  name: string;
  price: number;
}

function logProduct_0308(product: Product_0308) {
  const id: number = product.id;
     // ~~ Type 'string' is not assignable to type 'number'
  const name: string = product.name;
  const price: number = product.price;
  console.log(id, name, price);
}
