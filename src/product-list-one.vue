<template>
  <div id="product-one">
    <h2>Product - 1</h2>
    <ul v-for="product in products" :key="product.name">
      <li class="name">{{product.name}}</li>
      <li class="price">{{product.price}}</li>
    </ul>
    <button v-on:click="reducePrice(4)">Reduce Price by 5%</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  methods: {
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    ...mapGetters([
      'saleProducts',
    ])
  },
  methods: {
    ...mapActions([
      'reducePrice'
    ])
  }
}
</script>
<style scoped>
</style>
