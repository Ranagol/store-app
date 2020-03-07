let products = [
  {id: 1, title: 'carapa', quantity: 3},
  {id: 2, title: 'hamburger', quantity: 5}
];

export default class ProductService {
  getAllProducts(){
    return products;
  }
}

export const productService = new ProductService();