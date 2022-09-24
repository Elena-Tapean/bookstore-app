<template>
    <main class="product-page main-grid">
        <h1>{{ this.$router.currentRoute.params.id }}</h1>
        <a class="go-back main-grid" href="/"><svg width="10" height="10" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 1L1 9L9 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Back</a>

        <Favorites />

        <ul>
            <li v-for="product in products" :key="products?.id">
                <router-link :to="`/product/${products.id}`">{{products.title}}</router-link>
            </li>
        </ul>
        <button class="borrow-button" @click={handleBorrow}>BORROW</button>
        <button class="buy-button" @click={handleBuy}>BUY</button>
    </main>
</template>

<script>
import Favorites from '@/components/Favorites.vue'
export default {
    name: "Product",
    data() {
        return {
            id: [],
            img: "",
            title: "",
            description: "",
            price: [],
            quantity: []
        };
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    },
    methods: {
        handleProducts(id) {
            this.$store.commit("SHOW_PRODUCT", { id });
        },
        handleBorrow() {
            this.$store.commit("BORROW_BOOK");
        },
        handleBuy() {
            this.$store.commit("BUY_BOOK");
        }
    },
    components: { Favorites }
}
</script>

<style lang="scss">
.product-page {
    @media only screen and (min-width: 0) {
        height: 100%;
        position: relative;

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
        .go-back {
            position: absolute;
            top: 30px;
            left: 10px;
            margin-left: 10px;
            font-size: 14px;
            text-decoration: none;
        }
        .borrow-button {
            display: block;
            margin: 0 auto;
            padding: 5px;
            border-radius: 5px;
            background-color: #6A5ACD;
            color: white;
            border: none;
            font-size: 16px;
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
        .go-back {
            margin-left: 20px;
            font-size: 17px;
        }
    }
}
</style>