import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CreateProduct from './views/CreateProduct.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'create',
          name: 'createProduct',
          component: CreateProduct,
        },
      ],
    },
  ],
});
