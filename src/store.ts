import Vue from 'vue';
import Vuex from 'vuex';
import {IProduct} from '@/entities/Product';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      products: [],
      basket: [],
  },
  mutations: {
      addToBasket(state, product: IProduct) {
        state.basket.push(product);
      },
      newProduct(state, product: IProduct) {
          console.log(state);
          state.products = state.products.push(product);
      },
  },
});
