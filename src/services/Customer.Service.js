let customers = [//zasto ovo nije unutar klase CustomerService?
  { id: 1, firstName: 'Pera', lastName: 'Peric', email: 'peric@pera.com', boughtProducts: [] },
  { id: 2, firstName: 'Zika', lastName: 'Zikic', email: 'zika@gmail.com', boughtProducts: [] }
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
  
}

export const customerService = new CustomerService();