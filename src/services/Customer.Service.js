let customers = [//zasto ovo nije unutar klase CustomerService?
  { id: 1, firstName: 'Pera', lastName: 'Peric', email: 'peric@pera.com', boughtProducts: [] },
  { id: 2, firstName: 'Zika', lastName: 'Zikic', email: 'zika@gmail.com', boughtProducts: [] }
]

export default class CustomerService {
  getAllCustomers() {
    return customers;
  }

  deleteCustomerService(id) {
    console.log('Service activated');
    customers = customers.filter(customer => customer.id !== id);
    console.log(customers)
  }

  /*
  createCustomer(){
    return {
      id: this.idCreator(),
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
    }
  }

  addCustomer(){
    this.customers.unshift(this.createCustomer());
  }

  idCreator(){
    let id = "id" + Math.random().toString(16).slice(2);
    return id;
  }
  */
}

export const customerService = new CustomerService();