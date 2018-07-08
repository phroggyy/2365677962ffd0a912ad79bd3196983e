<template>
    <div class="container">
        <h1 class="text-center">Products</h1>
        <div>
            <router-link :to="{ name: 'createProduct' }" class="button">New product</router-link>
        </div>
        <div class="flex">
            <div class="flex-1">
                <ProductList>
                    <div slot-scope="{ addToBasket, product }">
                        <Card>
                            <img :src="product.image" :alt="product.name">
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
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ProductList from '../components/ProductList.vue';
    import Card from '../components/Card.vue';

    @Component({
        components: {
            ProductList,
            Card,
        },
    })
    export default class Home extends Vue {
    }
</script>
