<template>
    <div id="app" class="h-full">
        <router-view/>
    </div>
</template>

<style lang="scss">
    @tailwind preflight;
    @tailwind utilities;

    .button {
        @apply .p-4 .bg-green-light .text-white .text-center .no-underline;

        &:hover {
            @apply .bg-green .shadow;
        }
    }

    .item-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 1rem;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        @apply .bg-grey-lightest;
    }

    html, body, #app {
        @apply .h-full;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
