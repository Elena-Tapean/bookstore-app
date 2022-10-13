<template>
    <main class="basket-page main-grid">
        <h1>My Shopping Basket</h1>
        <ul class="container">
            <li class="item" v-for="product in basket" :key="product.id">
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
                <button class="buying-button" @click="buyProduct(product)">
                    Buy
                </button>
            </li>
        </ul>
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
        basket () {
            return this.$store.state.basket
        }, 
        products () {
            return this.$store.state.products
        },
    },
    methods: {
        increment (id) {
            this.$store.commit('INCREMENT_PRODUCT_COUNT', {id})
        },
        decrement (id) {
            this.$store.commit('DECREMENT_PRODUCT_COUNT', {id})
        },
        buyProduct (product) {
            this.$store.commit('BUYING_PRODUCT', product)
        }
    }
}
</script>

<style lang="scss">
.basket-page {
    @media only screen and (min-width: 0) {
        height: 100%;

        ul, li {
            list-style-type: none;
        }
        .container {
            padding: 5px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;   
        }
        .item {
            margin: 15px;
            padding: 25px 15px 10px 15px;
            border: 1px solid rgb(4, 222, 222);
            border-radius: 4px;
            background-color: lightcyan;
        }
        span {
            margin: 5px;
            font-size: 16px;
            font-style: normal;
        }
        a {
            text-decoration: none;
            font-size: 17px;
            font-style: normal;
            color: darkblue;
        }
        a:hover {
            text-decoration: underline;
        }
        .product-img {
            width: 120px;
            height: 150px;
            border-radius: 5px;
        }
        .quantity-button {
            margin: 5px;
            border: none;
            border-radius: 4px;
            background-color: rgb(228, 83, 131);
            color: white;
            font-size: 14px;
        }
        .quantity-button:hover {
            background-color: rgb(218, 30, 93)
        }
        span {
            margin: 5px;
            font-size: 16px;
            font-style: normal;
        }
        .buying-button {
            margin: 5px;
            border: 1px solid green;
            border-radius: 5px;
            background-color: mediumseagreen;
            color: white;
            font-size: 17px;
            font-style: normal;
        }
        .buying-button:hover {
            background: linear-gradient(green, mediumseagreen);
        }
    }
}
</style>