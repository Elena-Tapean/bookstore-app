<template>
    <main class="basket-page main-grid">
        <h1>My Basket:</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                <router-link to="/basket">{{ product.title }}</router-link>
            </li>
        </ul>
    </main>
</template>

<script>
export default {
    name: 'Basket',
    computed: {
        products () {
            return this.$store.state.products
        }
    }
}
</script>

<style lang="scss">
.basket-page {
    @media only screen and (min-width: 0) {

    }
}
</style>