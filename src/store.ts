import Vue from 'vue';
import Vuex from 'vuex';
import {IProduct} from '@/entities/Product';

Vue.use(Vuex);

interface State {
    products: IProduct[];
    basket: IProduct[];
}

const state: State = {
    products: [],
    basket: [],
};

export default new Vuex.Store({
  state,
  mutations: {
      addToBasket(newState, product: IProduct) {
        newState.basket.push(product);
      },
      newProduct(newState, product: IProduct) {
          newState.products.push(product);
      },
  },
});
