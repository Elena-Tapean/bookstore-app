<template>
    <main class="basket-page main-grid">
        <h1>My Shopping Basket</h1>
        <ul>
            <li v-for="product in basket" :key="product.id">
                <router-link :to="`/product/${product.id}`">
                    {{ product.name }}
                </router-link>
            </li>
        </ul>
    </main>
</template>

    <!--urmeaza stilizarea si butonul buy-->

<script>
export default {
    name: 'Basket',
    data () {
        return {
        }
    },
    created () {
      this.$store.dispatch('get_data')
    },
    computed: {
        basket () {
            return this.$store.state.basket
        }, 
        products () {
            return this.$store.state.products
        }
    },
    methods: {
    }
}
</script>

<style lang="scss">
.basket-page {
    @media only screen and (min-width: 0) {

    }
}
</style>