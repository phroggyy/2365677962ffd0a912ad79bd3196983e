<template>
    <div class="container h-full flex">
        <div class="flex-1">
            <div class="flex justify-between align-middle p-4">
                <h1>Products</h1>
                <router-link v-if="$route.name !== 'createProduct'" :to="{ name: 'createProduct' }" class="button">New product</router-link>
            </div>
            <ProductList class="flex p-4">
                <div slot-scope="{ addToBasket, product }" class="w-1/3">
                    <Card>
                        <img v-if="product.image" class="w-full" :src="product.image" :alt="product.name">
                        <h3>{{ product.name }}</h3>
                        <p>{{ product.description }}</p>
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
    import {Component, Vue} from "vue-property-decorator";
    import ProductList from "../components/ProductList.vue";
    import Card from "../components/Card.vue";

    @Component({
        components: {
            ProductList,
            Card,
        },
    })
    export default class Home extends Vue {
    }
</script>
