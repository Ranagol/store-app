<template>
  <div>
    <h3>Add new customer</h3>
      <form>
      <label for="firstName">First name</label>
      <input v-model="firstName" id="" class="form-control" type="text">
      <label for="lastName">Last name</label>
      <input v-model="lastName" id="lastName" class="form-control" type="text">
      <label for="email" >Email</label>
      <input v-model="email" id="email" class="form-control" type="text">
      <br>
      <button @click.prevent="addCustomer" class="btn btn-info">Create customer</button>
    </form> 
    <hr>



    <h3>Customers list</h3>
    <table class="table">
      <tr>
        <th>Id</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <th>Delete</th>
        <th>Vidi listu proizvoda</th>
      </tr>
      <tr v-for="(customer, i) in customers" :key="i">
        <td>{{ customer.id }}</td>
        <td>{{ customer.firstName }}</td>
        <td>{{ customer.lastName }}</td>
        <td>{{ customer.email }}</td>
        <td><button @click="deleteCustomer(customer.id)" class="btn btn-danger">Delete</button></td>
        <td><router-link class="btn btn-success" :to="{ name: 'customer' , params: {id: customer.id}}">Pokazi detalje</router-link></td><!-- RESENJE BROJ 1, RADI -->
        <!--<router-link :to="getCustomerRoute(customer.id)" class="btn btn-success top-margin">Pokazi detalje</router-link>--><!-- RESENJE BROJ 2, RADI -->
      </tr>
    </table>
    <router-view></router-view>
  </div>
</template>

<script>
import { customerService } from '../services/Customer.Service';

export default {
  name: 'AppCustomers',
  data(){
    return {
      customers: customerService.getAllCustomers(),
      firstName: '',
      lastName: '',
      email: '',
    }
  },
  components: {
    
  },
  methods: {
    deleteCustomer(id){
      //console.log(id);
      //console.log('service called');
      customerService.deleteCustomerService(id);//OK, ovde cemo imati problem. Iako ce servis izbrisati customera na osnovu ove komande, to ce se desiti na servisu, i ova strana to nece znati, pa izbrisani customer nece nestati sa displeja...
      this.customers = customerService.getAllCustomers()//...Zato nam je potrebna ova linija ovde. ovo ovako refreshuje sve, i ovako ce se prikazati refreshovana strana bez izbrisanog customera.
      
    },
    getCustomerRoute(id) {
      return `/customers/${id}`;
    },

    addCustomer(){
      let newCustomer = { firstName: this.firstName, lastName: this.lastName, email: this.email, boughtProducts: [] }
      customerService.createCustomer(newCustomer);
    }
    

  }
}
</script>










<style>
.top-margin{
  margin-top: 12px;
}

</style>
