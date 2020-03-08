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
    products = products.filter(product => product.title !== title);
  }

  increase(product){
    product.quantity++;//Auh... Ovo ne kontam, Vanja. Vidim da radi, ali ne znam zasto. Kako moze JS da sam pronadje ovaj produkt objekat u products array (i da mu menja kolicinu), bez toga da mu je pre toga receno da treba da trazi u products array????
  }

  decrease(product){
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  showProduct(id){
    let product = products.find(product => product.id == id);
    return product;
  }
}

export const productService = new ProductService();