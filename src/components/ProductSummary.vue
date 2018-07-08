<template functional>
    <img v-if="product.image" class="w-full" :src="product.image" :alt="product.name">
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
</template>
<script lang="ts">
  import { Component } from 'vue-property-decorator';

  @Component
  export default class ProductSummary {
  }
</script>