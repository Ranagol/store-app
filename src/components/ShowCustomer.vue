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
  data() {
    return {
      customer: ''
    }
  },
  created() {
    this.updateCustomerDetails(this.id);
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  watch: {
    id: function(val) {
      this.updateCustomerDetails(val);
    }
  },
  methods: {
    updateCustomerDetails(id) {
      this.customer = customerService.showCustomer(id);
    }
  }
}
</script>

<style>

</style>