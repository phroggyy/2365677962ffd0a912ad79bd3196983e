<template functional>
    <div class="shadow rounded bg-white hover:shadow-md">
        <slot></slot>
    </div>
</template>
<script lang="ts">
    import { Component } from "vue-property-decorator";

    @Component
    export default class Card {
    }
</script>

<style scoped>

</style>