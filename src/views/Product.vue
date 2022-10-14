<template>
    <main class="product-page main-grid">
        <h1>{{ product.name }}</h1>
        <img class="product-img" :src="product.img" alt="book cover" />
        <h3>Collection:</h3>
        <span>{{ product.collectionName }}</span>
        <h3>Genre:</h3>
        <span>{{ product.collectionId }}</span>
        <h3>Description:</h3>
        <p v-html="product.description" />
        <h3>Price:</h3> 
        <span>{{ product.price }} Ron</span>
    </main>
</template>

<script>
export default {
    name: 'Product',
    data () {
        return {
        }
    },
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
.product-page {
    @media only screen and (min-width: 0) {
        height: 100%;
        margin-bottom: 24px;

        h3 {
            font-size: 18px;
            font-style: italic;
        }
        span {
            margin: 0 auto;
            margin-bottom: 18px;
            display: flex;
            justify-content: center;
        }
        .product-img {
            width: 230px;
            height: 350px;
            margin: 5px;
        }
    }

    @media only screen and (min-width: 1024px) {
        h3 {
            font-size: 20px;
            font-style: italic;
        }
        span {
            margin: 0 auto;
            margin-bottom: 24px;
            display: flex;
            justify-content: center;
        }
        .product-img {
            width: 330px;
            height: 450px;
            margin: 5px;
            align-items: left;
        }
    }
}
</style>