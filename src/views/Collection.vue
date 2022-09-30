<template>
    <main class="collection-page main-grid">
        <h1>Select the product from collection</h1>
        <ul>
            <li v-for="product in products">
                <router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
            </li>
        </ul>
    </main>
</template>

<script>
export default {
    name: 'Collection',
    computed: {
        products () {
            const collectionName = this.$router.currentRoute.params.id
            const products = this.$store.state.products
            return products.filter(obj => obj.collectionName === collectionName)
        }
    }
}
</script>

<style lang="scss">
    .collection-page {
        @media only screen and (min-width: 0) {
            height: 100%;
            
            ul, li {
                list-style-type: none;
            }
            li {
                margin-bottom: 24px;
            }
        }

    @media only screen and (min-width: 1024px) {
        
    }
}
</style>