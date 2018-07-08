<template>
    <div>
        <ProductListing class="p-4 item-grid">
            <div slot-scope="{ addToBasket, product }">
                <Card>
                    <ProductSummary :product="product" :editable="true"></ProductSummary>
                    <button class="w-full button" @click="addToBasket(product)">Add to basket</button>
                </Card>
            </div>
        </ProductListing>
    </div>
</template>
<script lang="ts">
  import { Component } from 'vue-property-decorator';

  @Component
  export default class BrowseProducts {
  }
</script>