<template>
  <div>
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
        <td><button @click="deleteCustomer(customer)" class="btn btn-danger">Delete</button></td>
        <td><button class="btn btn-success">Lista proizvoda</button></td>
      </tr>
    </table>

  </div>
</template>

<script>


export default {
  name: 'AppCustomers',
  data(){
    return {
      customers: [
        { id: 1, firstName: 'Miki', lastName: 'Mikic', email: 'miki@gmail.com', listaProizvoda: [], },
        { id: 2, firstName: 'Ziki', lastName: 'Zikic', email: 'ziki@gmail.com', listaProizvoda: [], },
      ]
    }
  },
  components: {
    
  },
  methods: {
    deleteCustomer(customer){
      const index = this.customers.indexOf(customer);
      this.customers.splice(index, 1);
    }
  }
}
</script>

<style>

</style>
