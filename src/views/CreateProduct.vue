<template>
    <div class="flex flex-col text-left bg-grey-lighter p-4">
        <router-link :to="{ name: 'home' }" class="text-xl text-grey no-underline">&times;</router-link>
        <h2>Create a product</h2>
        <label for="name">Name*</label>
        <input type="text" v-model="product.name">
        <label for="name">Product Image URL</label>
        <input type="text" v-model="product.image">
        <label for="name">Product Description*</label>
        <textarea v-model="product.description"></textarea>
        <button class="button mt-4" @click="createNewProduct">Create</button>
    </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { IProduct } from '../entities/Product';
  import store from '../store';

  @Component({})
  export default class CreateProduct extends Vue {
    public product: IProduct = {
      name: '',
      image: '',
      description: '',
    };

    public createNewProduct() {
      store.commit('newProduct', this.product);

      this.$router.push({ name: 'home' });
    }
  }
</script>

<style lang="scss" scoped>
    @tailwind utilities;

    label {
        @apply .font-bold .text-grey-darker .mt-2;
    }

    input, textarea {
        @apply .bg-transparent .py-2 .outline-none .border-b .border-grey-darker;

        &:focus {
            @apply .border-green-light;
        }
    }
</style>