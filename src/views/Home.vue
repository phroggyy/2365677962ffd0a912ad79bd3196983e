<template>
    <div class="container h-full flex">
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
        <router-view class="w-1/4"></router-view>
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
        grid-auto-columns: 1fr;
        grid-template-areas: "a a a";
        grid-gap: 1rem;
    }
</style>