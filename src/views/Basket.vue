<template>
    <main class="basket-page main-grid">
        <h2>My Basket</h2>
        <ul>
            <li v-for="product in basket" :key="product.id">
                <router-link :to="`/product/${product.id}`">
                    <img class="product-img" :src="product.img" alt="book cover" />
                    <br/>
                    {{ product.name }}
                </router-link>
                <br/>
                <div class="container-div">
                    <button class="quantity-button" @click="decrement(product.id)">-</button>
                    <span>{{ product.count || 0 }}</span>
                    <button class="quantity-button" :disabled="product.quantity && (product.quantity <= product.count)" 
                            @click="increment(product.id)">+</button>
                    <span v-if="product.quantity && (product.quantity <= product.count)">Max stock reached</span>
                </div>
                <button class="buying-button" :disabled="!product.count || product.count === 0"
                        @click="buyProduct(product)">
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
        background-image: url('../assets/home.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        h2 {
            font-size: 24px;
            color: black;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            font-style: normal;
            text-align: center;
        }
        ul, li {
            list-style-type: none;
        }
        .product-img {
            width: 120px;
            height: 150px;
            border-radius: 5px;
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
        .buying-button:disabled {
            margin: 5px;
            border: 1px solid rgba(128, 128, 128, 0.8);
            border-radius: 5px;
            background-color: rgba(128, 128, 128, 1.0);
            opacity: 0.4;
            color: white;
            font-size: 14px;
            font-style: normal;
        }
        .buying-button:enabled {
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
        ul, li {
            list-style-type: none;
        }
        .product-img {
            width: 130px;
            height: 170px;
            border-radius: 5px;
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
        .buying-button:disabled {
            margin: 5px;
            font-size: 16px;
        }
        .buying-button:enabled {
            margin: 5px;
            font-size: 18px;
        }
    }
}
</style>