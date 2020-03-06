<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-nav">
        <router-link class="form-control" to="/customers">Customers</router-link>     
        <router-link class="form-control" to="/products">Products</router-link>
      </div>
  </nav>

  </div>
</template>

<script>


export default {
  name: 'Header',
  components: {
    
  }
}
</script>

<style>

</style>