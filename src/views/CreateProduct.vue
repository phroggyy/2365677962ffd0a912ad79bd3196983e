<template>
    <div>
        <h2>Create a product</h2>
        <label for="name">Name*</label>
        <input type="text" v-model="product.name">
        <label for="name">Product Image URL</label>
        <input type="text" v-model="product.image">
        <label for="name">Product Description*</label>
        <input type="text" v-model="product.description">
        <button class="button" @click="createNewProduct">Create</button>
    </div>
</template>

<script lang="ts">
    import { Component } from "vue-property-decorator";
    import {IProduct} from "../entities/Product";
    import store from "../store";

    @Component
    export default class CreateProduct {
        product: IProduct = {
            name: '',
            image: '',
            description: '',
        };

        createNewProduct() {
            store.commit('newProduct', this.product);
        }
    }
</script>