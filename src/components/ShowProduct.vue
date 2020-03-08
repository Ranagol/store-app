<template>
  <div>
    <hr>
    <h3>Odabrani produkt:</h3>
    <div v-show="!onStock">
      <p>Robe nema na lageru</p>
      <p><router-link to="/products" class="btn btn-info">Vrati se na spisak robe</router-link></p>
    </div>

    <div v-show="onStock">
      <p>Product name: {{ product.title }}</p>
      <p>Product id: {{ product.id }}</p>
      <p>On stock: {{ product.quantity }}</p>

      <label for="kupac">Odaberi kupca: </label>
      <select id="kupac" v-model="selectedCustomer">
        <option v-for="(customer, i) in customers" :key="i" v-bind:value="customer">
          {{ customer.firstName }} {{ customer.lastName }}
        </option>
      </select><br>

      <button @click.prevent="confirm(product)" class="btn btn-success">Confirm</button>
      <router-link to="/products" class="btn btn-warning">Cancel</router-link>
    </div>
  </div>
</template>

<script>

import { productService } from '../services/ProductService';
import { customerService } from '../services/Customer.Service';

export default {
  name: 'ShowProduct',
  data() {
    return {
      product: '',
      selectedCustomer: null,
      onStock: true
    } 
  },
  created() {//this kicks in first
    this.updateProductDetails(this.id);
    this.customers = customerService.getAllCustomers();
  },

  computed: {
    id() {//this gets the id from url
      return this.$route.params.id;
    }
  },
  watch: {
    id: function(val) {//this is watching id for change
      this.updateProductDetails(val);
    }
  },
  methods: {//this is called on page start or on id change
    updateProductDetails(id) {
      this.product = productService.showProduct(id);
      this.checkStock(this.product);
    },

    confirm(product){
      if (this.selectedCustomer == null) {
        alert('You must select a customer!');
      } else {
        productService.decrease(product);
        customerService.buyProduct(product, this.selectedCustomer);
      }
    },

    checkStock(product){
      if (product.quantity <= 0) {
        this.onStock = false;
      } else {
        this.onStock = true;
      }
    }
  }
}
</script>

