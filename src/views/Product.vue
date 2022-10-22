<template>
    <main class="product-page main-grid">
        <router-link class="go-back" to="/"> 
           Go Back
        </router-link>
        <h1>{{ product.name }}</h1>
        <img class="product-img" :src="product.img" alt="book cover" />
        <h2>Author:</h2>
        <span>{{ product.author }}</span>
        <h2>Genre:</h2>
        <span>{{ product.collectionId }}</span>
        <h2>Description:</h2>
        <p v-html="product.description" />
        <h2>Price:</h2>
        <span>{{ product.price }} Lei</span>
        <h2>Quantity:</h2>
        <div>
            <button class="quantity-button" @click="decrement(product.id)">-</button>
            <span>{{ product.count || 0 }}</span>
            <button class="quantity-button" :disabled="product.quantity && (product.quantity <= product.count)" 
                  @click="increment(product.id)">+</button>
            <br/>
            <span v-if="product.quantity && (product.quantity <= product.count)">Max stock reached</span>
        </div>
        <button class="basket-button" :disabled="!product.count || product.count === 0" 
                @click="addToBasket(product)">
            Add to basket
        </button>
    </main>
</template>

<script>
export default {
    name: 'Product',
    data () {
        return {
        }
    },
    created () {
        this.$store.dispatch('get_data')
    },
    computed: {
        products () {
            return this.$store.state.products
        },
        product () {
            const id = this.$router.currentRoute.params.id
            const products = this.$store.state.products
            const product = products.filter(obj => obj.id.toString() === id)[0]
            return product
        }
    },
    methods: {
        increment (id) {
            this.$store.commit('INCREMENT_PRODUCT_COUNT', {id})
        },
        decrement (id) {
            this.$store.commit('DECREMENT_PRODUCT_COUNT', {id})
        },
        addToBasket (product) {
            this.$store.commit('ADD_TO_BASKET', product)
        }
    }
}
</script>

<style lang="scss">
.product-page {
    @media only screen and (min-width: 0) {
        height: 100%;
        background-image: url('../assets/home.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        h1 {
            font-size: 28px;
            color: black;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }
        h2 {
            font-size: 19px;
            color: black;
            font-family: Arial, Helvetica, sans-serif;
        }
        span {
            margin: 0 auto;
            font-size: 18px;
            color: black;
            font-family: Arial, Helvetica, sans-serif;
        }
        .product-img {
            width: 220px;
            height: 300px;
            border-radius: 5px;
        }
        .go-back {
            margin: 20px;
            display: flex;
            font-size: 17px;
            font-style: italic;
            color: rgb(218, 30, 93);
            text-decoration: none;
        }
        .quantity-button {
            margin: 0 25px;
            margin-bottom: 15px;
            padding: 5px 20px;
            border: none;
            border-radius: 4px;
            background-color: rgb(228, 83, 131);
            color: white;
            font-size: 15px;
        }
        .quantity-button:hover {
            background-color: rgb(218, 30, 93);
        }
        .basket-button:disabled {
            margin: 5px;
            margin-bottom: 30px;
            padding: 5px;
            border: none;
            border-radius: 5px;
            background-color: rgba(128, 128, 128, 0.8);
            opacity: 0.5;
            color: white;
            font-size: 17px;
            font-style: normal;
        }
        .basket-button:enabled {
            margin: 5px;
            padding: 8px;
            margin-bottom: 30px;
            border: none;
            border-radius: 5px;
            background-color: mediumseagreen;
            color: white;
            font-size: 18px;
            font-style: normal;
      }
    }

    @media only screen and (min-width: 1024px) {
        h1 {
            margin: 15px;
            font-size: 30px;
        }
        h2 {
            margin: 15px;
            font-size: 21px;
            color: black;
            font-family: Arial, Helvetica, sans-serif;
        }
        p {
            margin: 0 50px;
        }
        .product-img {
            margin: 0 50px;
            width: 240px;
            height: 320px;
            float: right;
            border-radius: 5px;
        }
        .go-back {
            margin: 3px;
            margin-left: 50px;
            display: flex;
            font-size: 19px;
        }
        .quantity-button {
            margin: 0 25px;
            margin-bottom: 15px;
            padding: 5px 20px;
            border: none;
            border-radius: 4px;
            background-color: rgb(228, 83, 131);
            color: white;
            font-size: 15px;
        }
        .quantity-button:hover {
            background-color: rgb(218, 30, 93);
        }
        .basket-button:disabled {
            margin: 5px;
            margin-bottom: 30px;
            padding: 5px;
            border: none;
            border-radius: 5px;
            background-color: rgba(128, 128, 128, 0.8);
            opacity: 0.5;
            color: white;
            font-size: 17px;
            font-style: normal;
        }
        .basket-button:enabled {
            margin: 5px;
            padding: 8px;
            margin-bottom: 30px;
            border: none;
            border-radius: 5px;
            background-color: mediumseagreen;
            color: white;
            font-size: 18px;
            font-style: normal;
      }
    }
}
</style>