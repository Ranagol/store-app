<template>
  <div>
    <h3>Customer: {{ customer.firstName }}  {{ customer.lastName }}</h3>
    <p>Email: {{ customer.email }}</p>
    <p>Kupljeni proizvodi:</p>
    <ol>
      <li></li>
    </ol>
    
  </div>
</template>

<script>

import { customerService } from '../services/Customer.Service';
export default {
  name: 'ShowCustomer',
  data(){
    return {
      id: this.$route.params.id,
      customer: '',
    }
  },
  created(){
    console.log('created hook activated');
    this.customer = customerService.showCustomer(this.id);
    this.customer = JSON.parse(JSON.stringify(this.customer));
  },
  
}
</script>

<style>

</style>