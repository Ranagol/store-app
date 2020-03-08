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
    //console.log('Service activated');
    customers = customers.filter(customer => customer.id !== id);
    //console.log(customers)
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
    // console.log(customer);
    return customer;
  }

  buyProduct(product, selectedCustomer){
    console.log('buyProduct activated');
    console.log(selectedCustomer);
    console.log(product);
    selectedCustomer.boughtProducts.unshift(product);
    console.log(selectedCustomer);
  }

  

  
}

export const customerService = new CustomerService();