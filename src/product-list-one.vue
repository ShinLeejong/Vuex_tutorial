<template>
  <div id="product-one">
    <h2>Product - 1</h2>
    <ul v-for="product in products" :key="product.name">
      <li class="name">{{product.name}}</li>
      <li class="price">{{product.price}}</li>
    </ul>
    <button v-on:click="onReduceBtnClick(4)">Reduce Price by 5%</button>
  </div>
</template>
<script>

export default {
  methods: {
    // onReduceBtnClick: () => this.$store.state.products.forEach(ele => ele.price *= 95 / 100;
    onReduceBtnClick: function (price) {
      this.$store.dispatch("reducePrice", price)
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
}
</script>
<style scoped>
</style>
