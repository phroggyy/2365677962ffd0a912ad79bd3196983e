<script lang="ts">
    import { Component } from "vue-property-decorator";
    import store from '../store';
    import {IProduct} from '../entities/Product';

    @Component({
        functional: true
    })
    export default class ProductList {
        render(h, { slots }) {
            return slots.$scopedSlots.default({
                products: store.state.products,
                selectedProducts: store.state.selectedProducts,
                addToBasket: this.addToBasket,
            });
        }

        addToBasket(product: IProduct) {
            store.commit('addToBasket', product);
        }
    }
</script>