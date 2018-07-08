import Vue from 'vue';
import Vuex from 'vuex';
import { IProduct } from '@/entities/Product';

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
      const lastElement = Object.keys(newState.products).pop();
      product.key = lastElement ? `${parseInt(lastElement, 10) + 1}` : '1';

      newState.products.push(product);
    },
    updateProduct(newState, updatedProduct: IProduct) {
      if (! updatedProduct.key) {
        throw new Error('A product must exist to be updated');
      }

      newState.products = newState.products
        .map((product) => product.key === updatedProduct.key ? updatedProduct : product);
    }
  },
});
