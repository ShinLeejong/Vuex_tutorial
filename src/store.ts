import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // Register

interface store_state {
  state: {
    products: {
      name: string,
      price: Number
    }[]
  }
}

const store: store_state = new Vuex.Store({
  state: {
    products: [
      {name: 'apple', price: 400},
      {name: 'banana', price: 320},
      {name: 'kiwi', price: 310},
      {name: 'plum', price: 260},
      {name: 'potato', price: 350},
    ]
  }
})
