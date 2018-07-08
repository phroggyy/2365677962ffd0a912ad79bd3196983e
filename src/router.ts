import Vue from 'vue';
import Router from 'vue-router';
import BrowseProducts from './views/BrowseProducts.vue';
import ManageProducts from './views/ManageProducts.vue';
import CreateProduct from './views/CreateProduct.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'browse',
      component: BrowseProducts,
    },
    {
      path: '/manage',
      name: 'manage',
      component: ManageProducts,
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
