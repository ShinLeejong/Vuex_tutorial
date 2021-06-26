<template>
  <div id="app">
    <productOne v-bind:products="products"></productOne>
    <productTwo v-bind:products="products"></productTwo>
  </div>
</template>

<script>
import productOne from './product-list-one.vue';
import productTwo from './product-list-two.vue';

export default {

  name: 'app',
  data () {
    return {

    }
  },
  components: {
    productOne,
    productTwo,
  }
}
</script>

<style>
#app {
  font-family: Ubuntu;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 .5rem;
}

a {
  color: #42b983;
}
</style>
