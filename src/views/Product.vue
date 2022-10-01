<template>
    <main class="product-page main-grid">
        <h1>{{ product.name }}</h1>
        <img :src= alt="book cover" />
        <h3>Collection:</h3>
        <p>{{ product.collectionId }}</p>
        <h3>Description:</h3>
        <p>{{ product.description }}</p>
        <h3>Price: (Ron)</h3> 
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
        <button class="buy-button" @click="addToBasket(product)">Add to basket</button>
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

        span {
            display: inline;
            margin: 50px;
        }
        img {
            width: 120px;
            height: 100px;
            margin: 5px;
            align-items: left;
        }
        .buy-button {
            margin: 10px 30px;
            padding: 5px;
            border-radius: 5px;
            background-color: #3CB371;
            color: white;
            border: none;
            font-size: 16px;
        }
    }

    @media only screen and (min-width: 1024px) {

    }
}
</style>