<template>
  <div id="product-one">
    <h2>Product - 1</h2>
    <ul v-for="product in products" :key="product.name">
      <li class="name">{{product.name}}</li>
      <li class="price">{{product.price}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    products: Array
  }
}
</script>
<style scoped>
</style>
