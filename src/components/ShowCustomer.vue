<template>
  <div>
    <h3>Customer: {{ customer.firstName }}  {{ customer.lastName }}</h3>
    <p>Email: {{ customer.email }}</p>
    <p>Kupljeni proizvodi:</p>
    
    <ol>
      <li v-for="(product, i) in customer.boughtProducts" :key="i">{{ product.title }}</li>
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
  created() {//this kicks in automatically on page render
    this.updateCustomerDetails(this.id);
  },
  computed: {
    id() {//this gets the id from url
      return this.$route.params.id;
    }
  },
  watch: {
    id: function(val) {//this is watching id for change
      this.updateCustomerDetails(val);
    }
  },
  methods: {//this is called either on page start or on id change
    updateCustomerDetails(id) {
      this.customer = customerService.showCustomer(id);
    }
  }
}
</script>

