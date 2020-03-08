let products = [
  {id: 1, title: 'carapa1', quantity: 3},
  {id: 2, title: 'hamburger', quantity: 5},
  {id: 3, title: 'carapa2', quantity: 3},
];

export default class ProductService {
  getAllProducts(){
    return products;
  }

  filterProducts(title) {
    console.log('Service activated');
    products = products.filter(product => product.title !== title);
    console.log(products);
  }

  increase(product){
    product.quantity++;//ennek miert van direkt hozzaferese az adott produkthoz az arraybol????????
  }

  decrease(product){
    if (product.quantity > 0) {
      product.quantity--;//ennek miert van direkt hozzaferese az adott produkthoz az arraybol????????
    }
    
  }

  showProduct(id){
    let product = products.find(product => product.id == id);
    return product;
  }

  
}



export const productService = new ProductService();