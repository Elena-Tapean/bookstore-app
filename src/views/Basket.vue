<template>
    <main class="basket-page main-grid">
        <h1>My Shopping Basket</h1>
        <ul>
            <li v-for="product in basket" :key="product.id">
                <router-link :to="`/product/${product.id}`">
                    {{ product.name }}
                </router-link>
                <br/>
                <div>
                    <button class="buy-btn" @click="buyProduct(product)">Buy</button>
                </div>
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
        }
    },
    methods: {
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
        ul {
            width: 90%;
            max-width: 420px;
            margin: 10px 30px;
        }
        li {
            height: 110px;
            margin-bottom: 24px;
            border-radius: 4px;
            font-size: 18px;
            border: 1px solid cadetblue;
            background-color: lightblue;
            display: flex;
            flex-direction: column;
            justify-content: left;
            align-items: left;
        }
        a {
            margin-top: 10px;
            margin: 12px;
            text-decoration: none;
            font-style: italic;
            color: black;
            text-align: left;
        }
        a:hover {
            text-decoration: underline;
        }
        .buy-btn {
            margin: 5px 10px 5px 10px;
            padding: 8px 10px;
            float: right;
            background: linear-gradient(mediumseagreen, green);
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 15px;
        }
        .buy-btn:hover {
            background: linear-gradient(green, mediumseagreen);
        }
    }
}
</style>