<template>
    <div class="container h-full flex flex-col-reverse md:flex-row">
        <div class="flex-1">
            <div class="flex justify-between align-middle">
                <h1>Products</h1>
                <router-link v-if="$route.name !== 'createProduct'" :to="{ name: 'createProduct' }" class="button">New
                    product
                </router-link>
            </div>
            <ProductList class="p-4 item-grid">
                <div slot-scope="{ updateProduct, product }">
                    <Card>
                        <ProductSummary :product="product" :editable="true"></ProductSummary>
                        <button class="w-full button" @click="addToBasket(product)">Edit</button>
                    </Card>
                </div>
                <p slot="empty">No products yet</p>
            </ProductList>
        </div>
        <router-view class="w-full md:w-1/3 lg:w-1/4"></router-view>
    </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ProductList from '../components/ProductList.vue';
  import ProductSummary from '../components/ProductSummary.vue';
  import Card from '../components/Card.vue';

  @Component({
    components: {
      ProductList,
      ProductSummary,
      Card,
    },
  })
  export default class ManageProducts extends Vue {
  }
</script>