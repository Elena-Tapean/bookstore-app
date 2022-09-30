<template>
    <section class="product-view main-grid">
        <h1>{{ product.name }}</h1>
        <h3>Collection:</h3>
        <p>{{ product.collectionId }}</p>
        <h3>Description:</h3>
        <p>{{ product.description }}</p>
        <h3>Price:</h3> 
        <span>{{ product.price }}</span>
        <br/>
        <h3>Quantity:</h3>
        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <br/>
        <br/>
        <button @click="addToBasket(product)">Add to basket</button>
    </section>
</template>

<script>
export default {
    name: 'ProductView',
    computed: {
        product () {
            const id = this.$router.currentRoute.params.id
            const products = this.$store.state.products
            const product = products.filter(obj => obj.id.toString() === id)[0]
            return product
        }
    }
}
</script>

<style lang="scss">
    .product-view {
        margin-bottom: 10px;
}
</style>