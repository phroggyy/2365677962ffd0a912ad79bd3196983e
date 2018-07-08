<template functional>
    <div>
        <img v-if="props.product.image" class="w-full" :src="props.product.image" :alt="props.product.name">
        <h3>{{ props.product.name }}</h3>
        <p>{{ props.product.description }}</p>
    </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { IProduct } from '../entities/Product';

  @Component
  export default class ProductSummary extends Vue {
    @Prop() public product?: IProduct;
    @Prop({ default: false }) public editable?: boolean;
  }
</script>