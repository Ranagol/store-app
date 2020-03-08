<template>
  <div>
    <h3>Products</h3>
    <table class="table">
      <tr>
        <th>Id</th>
        <th>Naziv</th>
        <th>Kolicina</th>
        <th>Povecaj lager</th>
        <th>Smanji lager</th>
        <th>Prodaj</th>
      </tr>
      <tr v-for="(product, i) in products" :key="i">
        <td>{{ product.id }}</td>
        <td>{{ product.title }}</td>
        <td>{{ product.quantity }}</td>
        <td><button class="btn btn-danger">Lager+</button></td>
        <td><button class="btn btn-warning">Lager-</button></td>
        <td><button class="btn btn-info">Prodaj</button></td>
      </tr>
    </table>

    <h3>Filterisana varijanta</h3>
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
        <td><button class="btn btn-danger">Lager+</button></td>
        <td><button class="btn btn-warning">Lager-</button></td>
        <td><button class="btn btn-info">Prodaj</button></td>
      </tr>
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
        product.title.match(this.filterText))
    }
  }
}
</script>

<style>

</style>