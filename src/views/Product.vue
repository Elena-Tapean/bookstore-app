<template>
    <main class="product-page main-grid">
        <h1>{{ product.name }}</h1>
        <img src="" alt="book cover" />
        <h3>Collection:</h3>
        <span>{{ product.collectionName }}</span>
        <h3>Genre:</h3>
        <span>{{ product.collectionId }}</span>
        <h3>Description:</h3>
        <p>{{ product.description }}</p>
        <h3>Price: (Ron)</h3> 
        <span>{{ product.price }}</span>
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
        p {
            margin: 0 20px;
            font-size: 17px;
            text-align: justify;
            text-indent: 30px;
            line-height: 2;
        }
        span {
            margin: 0 auto;
            margin-bottom: 18px;
            display: flex;
            justify-content: center;
        }
        img {
            width: 120px;
            height: 100px;
            margin: 5px;
        }
        select {
            border: 1px solid grey;
            border-radius: 5px;
            background-color: white;
            font-size: 16px;
            option {
                background-color: white;
            }
        }
        button {
            margin: 10px 30px;
            padding: 5px;
            border-radius: 5px;
            background-color: #3CB371;
            color: white;
            border: none;
            font-size: 17px;
        }
    }

    @media only screen and (min-width: 1024px) {
        h3 {
            font-size: 20px;
            font-style: italic;
        }
        p {
            margin: 0 50px;
            font-size: 19px;
            text-align: center;
            text-indent: 30px;
            line-height: 2;
        }
        span {
            margin: 0 auto;
            margin-bottom: 24px;
            display: flex;
            justify-content: center;
        }
        img {
            width: 120px;
            height: 100px;
            margin: 5px;
            align-items: left;
        }
        select {
            border: 1px solid grey;
            border-radius: 5px;
            background-color: white;
            font-size: 18px;
            option {
                background-color: white;
            }
        }
        button {
            margin: 10px 30px;
            padding: 5px;
            border-radius: 5px;
            background-color: #3CB371;
            color: white;
            border: none;
            font-size: 18px;
        }
    }
}
</style>