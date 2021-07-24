interface Product_0313 {
  id: string;
  name: string;
  price: number;
}

function logProduct_0313(product: Product_0313) {
  const id: number = product.id;
     // ~~ Type 'string' is not assignable to type 'number'
  const name: string = product.name;
  const price: number = product.price;
  console.log(id, name, price);
}
const elmo_0313: Product_0313 = {
  name: 'Tickle Me Elmo',
  id: '048188 627152',
  price: 28.99,
};
