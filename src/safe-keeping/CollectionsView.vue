<!--<template>
    <section class="collections-view main-grid">
        <h1>Select product from collection</h1>
        <ul>
            <li v-for="product in products">
                <router-link :to="`/productview/${product.id}`">{{ product.name }}</router-link>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'CollectionsView',
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
    .collections-view {
        ul, li {
            list-style-type: none;
        }
        li {
            margin-bottom: 24px;
        }
    }
</style>-->