<template>
    <main class="basket-page main-grid">
        <router-link class="go-back" to="/"> 
           Go Back
        </router-link>
        <h2>My Basket</h2>
        <div class="min-div">
            <div class="shader-bg">
                <ul>
                    <li v-for="product in basket" :key="product.id">
                        <router-link :to="`/product/${product.id}`">
                            <img class="product-img" :src="product.img" alt="book cover" />
                            <br/>
                            {{ product.name }}
                        </router-link>
                        <br/>
                        <div>
                            <button class="quantity-button" @click="decrement(product.id)">-</button>
                            <span>{{ product.count || 0 }}</span>
                            <button class="quantity-button" :disabled="product.quantity && (product.quantity <= product.count)" 
                                   @click="increment(product.id)">+</button>
                            <span v-if="product.quantity && (product.quantity <= product.count)">Max stock reached</span>
                        </div>
                        <button class="buy-button" :disabled="!product.count || product.count === 0" 
                                @click.prevent="buyProduct(product)">
                            BUY
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex-div">
            <div class="shader-bg">
                <ul>
                    <li v-for="product in basket" :key="product.id">
                        <router-link :to="`/product/${product.id}`">
                            <img class="product-img" :src="product.img" alt="book cover" />
                            <br/>
                            {{ product.name }}
                        </router-link>
                        <br/>
                        <div>
                            <button class="quantity-button" @click="decrement(product.id)">-</button>
                            <span>{{ product.count || 0 }}</span>
                            <button class="quantity-button" :disabled="product.quantity && (product.quantity <= product.count)" 
                                   @click="increment(product.id)">+</button>
                            <span v-if="product.quantity && (product.quantity <= product.count)">Max stock reached</span>
                        </div>
                        <button class="buy-button" :disabled="!product.count || product.count === 0" 
                                @click.prevent="buyProduct(product)">
                            BUY
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

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
        products () {
            return this.$store.state.products
        },
        basket () {
            return this.$store.state.basket
        } 
    },
    methods: {
        increment (id) {
            this.$store.commit('INCREMENT_PRODUCT_COUNT', {id})
        },
        decrement (id) {
            this.$store.commit('DECREMENT_PRODUCT_COUNT', {id})
        },
        buyProduct () {
            this.$store.dispatch('BUY_PRODUCT', this.user)
        }
    }
}
</script>

<style lang="scss">
.basket-page {
    @media only screen and (min-width: 0) {
        height: 100%;
        background-image: url('../assets/home.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        .flex-div {
            display: none;
        }
        .shader-bg {
            margin: 0 125px;
            padding: 3px;
            background-color: rgba(255, 255, 255, 0.8);
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
        h2 {
            font-size: 24px;
            color: black;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            font-style: normal;
            text-align: center;
        }
        a {
            text-decoration: none;
            font-size: 18px;
            font-style: normal;
            color: black;
            font-family: Arial, Helvetica, sans-serif;
        }
        ul, li {
            list-style-type: none;
        }
        ul {
            margin: 5px;
            padding: 5px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .product-img {
            width: 120px;
            height: 150px;
            border-radius: 5px;
        }
        span {
            margin: 0 5px;
            font-size: 18px;
            color: black;
            font-family: Arial, Helvetica, sans-serif;
        }
        .quantity-button {
            margin: 0 15px;
            margin-bottom: 5px;
            padding: 5px 25px;
            border: none;
            border-radius: 4px;
            background-color: rgb(228, 83, 131);
            color: white;
            font-size: 15px;
        }
        .quantity-button:hover {
            background-color: rgb(218, 30, 93);
        }
        .buy-button {
            margin: 5px;
            padding: 7px;
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
        .flex-div {
            display: flex;
        }
        .shader-bg {
            margin: 10px 50px;
            padding: 3px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 5px;
        }
        .go-back {
            margin: 5px;
            margin-left: 50px;
            display: flex;
            font-size: 20px;
        }
        h2 {
            font-size: 27px;
        }
        a {
            font-size: 18px;
        }
        ul {
            margin: 0 30px;
            padding: 0 10px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .product-img {
            width: 130px;
            height: 170px;
        }
        .quantity-button {
            margin: 0 10px;
            padding: 5px 12px;
            border: none;
            border-radius: 4px;
            background-color: rgb(228, 83, 131);
            color: white;
            font-size: 16px;
        }
        .quantity-button:hover {
            background-color: rgb(218, 30, 93);
        }
        .buy-button {
            margin: 0;
            margin-top: 5px;
            padding: 7px;
            border: none;
            border-radius: 5px;
            background-color: mediumseagreen;
            color: white;
            font-size: 17px;
            font-style: normal;
        }
    }
}
</style>