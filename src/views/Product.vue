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
        <div class="container-div">
            <button class="quantity-button" @click="decrement(product.id)">-</button>
            <span>{{ product.count || 0 }}</span>
            <button class="quantity-button" :disabled="product.quantity && (product.quantity <= product.count)" 
                  @click="increment(product.id)">+</button>
            <span v-if="product.quantity && (product.quantity <= product.count)">Max stock reached</span>
        </div>
        <br/>
        <button class="basket-button" :disabled="!product.count || product.count === 0"
                @click="addToBasket(product)">
            Add to Basket
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
        margin-bottom: 24px;

        h3 {
            font-size: 17px;
            font-style: italic;
        }
        span {
            margin: 0 auto;
            margin-bottom: 18px;
            font-size: 16px;
            display: flex;
            justify-content: center;
        }
        .product-img {
            width: 230px;
            height: 350px;
            margin: 5px;
            float: center;
        }
        .container-div {
            padding: 5px;
            margin: 5px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;  
            
            .quantity-button {
                margin: 0 15px;
                padding: 6px 8px;
                border: none;
                border-radius: 4px;
                background-color: rgb(228, 83, 131);
                color: white;
                font-size: 16px;
            }
            .quantity-button:hover {
                background-color: rgb(218, 30, 93);
            }
            span {
                margin: 5px;
                font-size: 17px;
                font-style: normal;
            }
        }
        .basket-button:disabled {
            margin: 5px;
            border: 1px solid rgba(128, 128, 128, 0.8);
            border-radius: 5px;
            background-color: rgba(128, 128, 128, 1.0);
            opacity: 0.4;
            color: white;
            font-size: 14px;
            font-style: normal;
        }
        .basket-button:enabled {
            margin: 5px;
            border: 1px solid green;
            border-radius: 5px;
            background-color: mediumseagreen;
            color: white;
            font-size: 17px;
            font-style: normal;
        }
    }

    @media only screen and (min-width: 1024px) {
        h3 {
            font-size: 18px;
            font-style: italic;
            font-family: Verdana, Tahoma, sans-serif;
        }
        span {
            margin: 0 auto;
            margin-bottom: 20px;
            font-size: 17px;
            display: flex;
            justify-content: center;
            font-family: Arial, Helvetica, sans-serif;
        }
        .product-img {
            width: 330px;
            height: 450px;
            margin: 35px;
            float: right;
        }
        .container-div {
            padding: 5px;
            margin: 5px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;  
            
            .quantity-button {
                padding: 3px 8px;
                font-size: 17px;
            }
            span {
                font-size: 18px;
            }
        }
        .basket-button:disabled {
            margin: 5px;
            font-size: 16px;
        }
        .basket-button:enabled {
            margin: 5px;
            font-size: 18px;
        }
    }
}
</style>