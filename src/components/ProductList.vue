<template>
    <div>
        <slot v-for="product of products" :product="product" :addToBasket="addToBasket"></slot>
        <slot name="empty"></slot>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import store from '../store';
    import {IProduct} from '../entities/Product';

    @Component
    export default class ProductList extends Vue {

        public get products() {
            return store.state.products;
        }

        public addToBasket(product: IProduct) {
            store.commit('addToBasket', product);
        }
    }
</script>