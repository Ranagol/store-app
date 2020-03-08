let customers = [
  { id: 1, firstName: 'Pera', lastName: 'Peric', email: 'peric@pera.com', boughtProducts: [
    {id: 1, title: 'carapa1', quantity: 3},
    {id: 2, title: 'hamburger', quantity: 5},
  ] },
  { id: 2, firstName: 'Zika', lastName: 'Zikic', email: 'zika@gmail.com', boughtProducts: [
    {id: 2, title: 'hamburger', quantity: 5},
  ] }
];

let lastId = 2;

export default class CustomerService {
  getAllCustomers() {
    return customers;
  }

  deleteCustomerService(id) {
    customers = customers.filter(customer => customer.id !== id);
  }

  createCustomer(newCustomer){
    this.idCreator(newCustomer);
    customers.unshift(newCustomer);
  }
  
  idCreator(newCustomer){
    lastId ++;
    newCustomer.id = lastId;
  }

  showCustomer(id){
    let customer = customers.find(customer => customer.id == id);
    return customer;
  }

  buyProduct(product, selectedCustomer){
    selectedCustomer.boughtProducts.unshift(product);
  }
}

export const customerService = new CustomerService();