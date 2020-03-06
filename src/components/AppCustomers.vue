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
      <button v-show="!editMode" @click.prevent="addCustomer" class="btn btn-info">Create customer</button>
      <button v-show="editMode" @click.prevent="saveNewData" class="btn btn-success">Create customer</button>
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
      editMode: false,
      whatToEdit:'',
      startId: 0,
      allId: [],

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
    },

    createCustomer(){
      return {
        id: this.idCreator(),
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      }
    },

    addCustomer(){
      this.customers.unshift(this.createCustomer());
    },

    idCreator(){
      let id = "id" + Math.random().toString(16).slice(2);
      return id;
    }

  }
}
</script>

<style>

</style>
