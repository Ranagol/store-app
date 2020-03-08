<template>
  <div>
    <h3>Products</h3>
   
    <input v-model="filterText" type="text">
    <table class="table">
      <tr>
        <th>Id</th>
        <th>Naziv</th>
        <th>Kolicina</th>
        <th>Povecaj lager</th>
        <th>Smanji lager</th>
        <th>Prodaj</th>
      </tr>
      <tr v-for="(filteredProduct, i) in filteredProducts" :key="i">
        <td>{{ filteredProduct.id }}</td>
        <td>{{ filteredProduct.title }}</td>
        <td>{{ filteredProduct.quantity }}</td>
        <td><button @click="increase(filteredProduct)" class="btn btn-danger" >Lager+</button></td>
        <td><button @click="decrease(filteredProduct)" class="btn btn-warning">Lager-</button></td>
        <td><router-link class="btn btn-info" :to="getProductRoute(filteredProduct.id)">Prodaj</router-link></td>
      </tr>
      <router-view></router-view>
    </table>
  </div>
</template>

<script>
import { productService } from '../services/ProductService';

export default {
  name: 'AppProducts',
  data(){
    return {
      products: productService.getAllProducts(),
      filterText: '',
    }
  },
  computed: {
    filteredProducts(){
      return this.products.filter(product => 
      product.title.toLowerCase().match(this.filterText.toLowerCase()))
    }
  },
  methods: {
    increase(filteredProduct){
      productService.increase(filteredProduct);
    },

    decrease(filteredProduct){
      productService.decrease(filteredProduct);
    },

    getProductRoute(id){
      return `/products/${id}`;
    }
  }
}
</script>

