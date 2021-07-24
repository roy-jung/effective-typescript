interface Product_0314 {
  id: string;
  name: string;
  price: number;
}

function logProduct_0314(product: Product_0314) {
  const id: number = product.id;
     // ~~ Type 'string' is not assignable to type 'number'
  const name: string = product.name;
  const price: number = product.price;
  console.log(id, name, price);
}
const furby_0314 = {
  name: 'Furby',
  id: 630509430963,
  price: 35,
};
logProduct(furby_0314);
        // ~~~~~ Argument .. is not assignable to parameter of type 'Product'
        //         Types of property 'id' are incompatible
        //         Type 'number' is not assignable to type 'string'
