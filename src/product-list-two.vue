<template>
  <div id="product-two">
    <h2>Product - 2</h2>
    <ul v-for="product in products" :key="product.name">
      <li class="name">{{product.name}}</li>
      <li class="price">{{product.price}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
}
</script>
<style>

</style>
