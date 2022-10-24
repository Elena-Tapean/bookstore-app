<template>
    <main class="product-page main-grid">
        <router-link class="go-back" to="/"> 
           Go Back
        </router-link>
        <div class="shader-bg">
            <div class="min-div">
                <img class="product-img" :src="product.img" alt="book cover" />
                <h1>{{ product.name }}</h1>
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
                    <span v-if="product.quantity && (product.quantity <= product.count)">Max stock reached</span>
                </div>
                <button class="basket-button" :disabled="!product.count || product.count === 0" 
                        @click="addToBasket(product)">
                    Add to basket
                </button>
            </div>
        </div>
        <div class="shader2-bg">
            <div class="flex-div">
                <img class="product-img" :src="product.img" alt="book cover" />
                <div class="info-div">
                    <h1>{{ product.name }}</h1>
                    <h2>Author:</h2>
                    <span>{{ product.author }}</span>
                    <h2>Genre:</h2>
                    <span>{{ product.collectionId }}</span>
                    <h2>Price:</h2>
                    <span>{{ product.price }} Lei</span>
                    <h2>Quantity:</h2>
                    <div>
                        <button class="quantity-button" @click="decrement(product.id)">-</button>
                        <span>{{ product.count || 0 }}</span>
                        <button class="quantity-button" :disabled="product.quantity && (product.quantity <= product.count)" 
                                @click="increment(product.id)">+</button>
                        <span v-if="product.quantity && (product.quantity <= product.count)">Max stock reached</span>
                    </div>
                    <button class="basket-button" :disabled="!product.count || product.count === 0" 
                            @click="addToBasket(product)">
                        Add to basket
                    </button>
                </div>
            </div>
            <div class="flex2-div">
                <h2>Description:</h2>
                <p v-html="product.description" />
            </div>
        </div>
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

        .shader-bg {
            margin: 15px 25px;
            padding: 3px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 5px;
        }
        .shader2-bg {
            display: none;
        }
        .flex-div {
            display: none;
        }
        .flex2-div {
            display: none;
        }
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
            margin-top: 15px;
            width: 220px;
            height: 300px;
            border-radius: 5px;
        }
        .go-back {
            margin: 20px;
            display: flex;
            font-size: 18px;
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
        .min-div {
            display: none;
        }
        .shader-bg {
            display: none;
        }
        .info-div {
            display: inline-block;
            margin-right: 150px;
        }
        .flex-div {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .flex2-div {
            display: flex;
            flex-wrap: wrap;
            h2 {
                margin-left: 60px;
                text-align: left;
            }
        }
        .shader2-bg {
            display: inline-block;
            margin: 15px 270px;
            margin-bottom: 30px;
            padding: 0 35px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 5px;
        }
        h1 {
            margin: 10px;
            font-size: 27px;
        }
        h2 {
            margin: 15px;
            font-size: 18px;
        }
        p {
            margin: 0 3px;
            margin-bottom: 30px;
        }
        span {
            margin: 0 5px;
            font-size: 17px;
        }
        .product-img {
            margin: 15px 8px;
            margin-left: 30px;
            width: 270px;
            height: 420px;
            border-radius: 5px;
        }
        .go-back {
            margin: 5px;
            margin-left: 50px;
            display: flex;
            font-size: 20px;
        }
        .quantity-button {
            margin: 0 10px;
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
            margin: 10px;
            padding: 7px;
            border: none;
            border-radius: 5px;
            background-color: rgba(128, 128, 128, 0.8);
            opacity: 0.5;
            color: white;
            font-size: 17px;
            font-style: normal;
        }
        .basket-button:enabled {
            margin: 10px;
            padding: 7px;
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