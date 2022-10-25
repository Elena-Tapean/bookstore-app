<template>
    <main class="basket-page main-grid">
        <router-link class="go-back" to="/"> 
           Go Back
        </router-link>
        <h2>My Basket</h2>
        <div class="shader-bg">
            <ul>
                <li v-for="product in basket" :key="product.id">
                    <router-link :to="`/product/${product.id}`">
                        <img class="product-img" :src="product.img" alt="book cover" />
                        <br/>
                        {{ product.name }}
                    </router-link>
                    <div class="flex-div">
                    <span>Price: {{ product.price }} Lei</span>
                    <div>
                        <span>Quantity:</span>
                        <button class="quantity-button" @click="decrement(product.id)">-</button>
                        <span>{{ product.count || 0 }}</span>
                        <button class="quantity-button" :disabled="product.quantity && (product.quantity <= product.count)" 
                               @click="increment(product.id)">+</button>
                        <span v-if="product.quantity && (product.quantity <= product.count)">Max stock reached</span>
                    </div>
                    </div>
                    <div class="flex-div">
                    <button class="buy-button" :disabled="!product.count || product.count === 0" 
                            @click.prevent="buyProduct(product)">
                        BUY
                    </button>
                    <br/>
                    <button class="delete-button" 
                            @click="deleteProduct(product.id)">
                        Delete
                    </button>
                    </div>
                </li>
            </ul>
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
            this.$alert("Your order is on its way!");
        },
        deleteProduct (id) {
            this.$store.commit('DELETE_PRODUCT', {id})
            this.$confirm("Are you sure?");
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

        .shader-bg { 
            margin: 0 25px;
            padding: 0;
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
            font-size: 17px;
            font-style: normal;
            color: black;
            font-family: Arial, Helvetica, sans-serif;
        }
        ul, li {
            list-style-type: none;
        }
        ul {
            margin: 15px;
            padding: 5px;
        }
        li {
            margin: 5px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
        }
        .product-img {
            width: 120px;
            height: 150px;
            border-radius: 5px;
        }
        div {
            margin: 20px 0 20px 0;
        }
        span {
            margin: 0 10px;
            padding: 3px;
            font-size: 18px;
            color: black;
            font-family: Arial, Helvetica, sans-serif;
        }
        .quantity-button {
            margin: 0;
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
            margin: 10px auto; 
            padding: 7px;
            border: none;
            border-radius: 5px;
            background: linear-gradient(mediumseagreen, green);
            color: white;
            font-size: 18px;
            font-style: normal;
        }
        .delete-button {
            margin: 10px 5px;
            padding: 5px;
            border: none;
            border-radius: 4px;
            background: linear-gradient(lightgrey, grey);
            color: white;
            font-size: 17px;
            font-style: normal;
        }
    }

    @media only screen and (min-width: 1024px) {
        .shader-bg {
            margin: 5px 350px;
            padding: 5px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 5px;
        }
        .flex-div {
            display: inline;
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
            margin: 0;
            padding: 5px;
            display: inline;
        }
        li {
            margin: 5px;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
        }
        .product-img {
            width: 120px;
            height: 150px;
            border-radius: 5px;
        }
        div {
            margin: 20px 0 20px 0;
        }
        span {
            margin: 0 10px;
            padding: 3px;
            font-size: 18px;
            color: black;
            font-family: Arial, Helvetica, sans-serif;
        }
        .quantity-button {
            margin: 0;
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
            margin: 10px auto; 
            padding: 7px;
            border: none;
            border-radius: 5px;
            background: linear-gradient(mediumseagreen, green);
            color: white;
            font-size: 18px;
            font-style: normal;
        }
        .delete-button {
            margin: 10px 5px;
            padding: 5px;
            border: none;
            border-radius: 4px;
            background: linear-gradient(lightgrey, grey);
            color: white;
            font-size: 17px;
            font-style: normal;
        }
    }
}
</style>