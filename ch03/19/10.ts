interface Product_0310 {
  id: string;
  name: string;
  price: number;
}
function logProduct_0310(product: Product) {
  const {id, name, price}: {id: string; name: string; price: number } = product;
  console.log(id, name, price);
}
