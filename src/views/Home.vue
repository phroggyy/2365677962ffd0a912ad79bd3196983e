<template>
    <div class="container h-full flex flex-col-reverse md:flex-row">
        <div class="flex-1">
            <div class="flex justify-between align-middle">
                <h1>Products</h1>
                <router-link v-if="$route.name !== 'createProduct'" :to="{ name: 'createProduct' }" class="button">New
                    product
                </router-link>
            </div>
            <ProductList class="p-4 product-list">
                <div slot-scope="{ addToBasket, updateProduct, product }">
                    <Card>
                        <ProductSummary :product="product"></ProductSummary>
                        <button class="w-full button" @click="addToBasket(product)">Add to basket</button>
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
  export default class Home extends Vue {
  }
</script>

<style lang="scss">
    .product-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 1rem;
    }
</style>