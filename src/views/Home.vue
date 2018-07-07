<template>
    <div class="container">
        <h1 class="text-center">Products</h1>
        <router-link :to="{ name: 'createProduct' }" class="button">New product</router-link>
        <div class="flex">
            <product-list slot-scope="{ addToBasket, products }">
                <Card v-for="product in products">
                    <img :src="product.image" :alt="product.name">
                    <h3>{{ product.name }}</h3>
                    <p>{{ product.description }}</p>
                    <button class="w-full button" @click="addToBasket(product)">Add to basket</button>
                </Card>
            </product-list>
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        components: {},
    })
    export default class Home extends Vue {
    }
</script>
