<template>
    <main class="product-page main-grid">
        <h1>{{ this.$router.currentRoute.params.id }}</h1>
        <a class="go-back main-grid" href="/"><svg width="10" height="10" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 1L1 9L9 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Back</a> 
        <div class="main-grid">
            <svg @click="handleFavorite" class="white-heart" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1456 1.44C13.6136 1.43956 14.0769 1.54377 14.5085 1.74654C14.94 1.9493 15.3311 2.24653 15.6587 2.6208C16.3339 3.3886 16.7123 4.42307 16.7123 5.5008C16.7123 6.57853 16.3339 7.61301 15.6587 8.3808L9 15.9336L2.34129 8.3808C1.66615 7.61301 1.28771 6.57853 1.28771 5.5008C1.28771 4.42307 1.66615 3.3886 2.34129 2.6208C2.66914 2.2468 3.06023 1.94972 3.49172 1.74693C3.92321 1.54414 4.38645 1.43969 4.85437 1.43969C5.3223 1.43969 5.78553 1.54414 6.21702 1.74693C6.64851 1.94972 7.03961 2.2468 7.36746 2.6208L9 4.4928L10.6261 2.6352C10.9528 2.25647 11.3443 1.95542 11.7772 1.75006C12.2101 1.5447 12.6755 1.43925 13.1456 1.44ZM13.1456 1.93165e-06C12.5065 -0.000604827 11.8737 0.141738 11.2843 0.418683C10.695 0.695629 10.1609 1.1016 9.71343 1.6128L9 2.4192L8.28657 1.6128C7.83855 1.10253 7.30434 0.697256 6.71508 0.420619C6.12581 0.143982 5.49329 0.00151015 4.85437 0.00151015C4.21546 0.00151015 3.58293 0.143982 2.99367 0.420619C2.40441 0.697256 1.8702 1.10253 1.42218 1.6128C0.510705 2.65221 0 4.05098 0 5.508C0 6.96502 0.510705 8.36379 1.42218 9.4032L9 18L16.5778 9.4032C17.4893 8.36379 18 6.96502 18 5.508C18 4.05098 17.4893 2.65221 16.5778 1.6128C16.1299 1.10225 15.5958 0.696705 15.0065 0.419806C14.4172 0.142907 13.7846 0.000198791 13.1456 1.93165e-06Z" fill="black"/>
</svg>
            <svg @click="handleFavorite" class="red-heart" width="18.5" height="18.5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 5.53881C18 2.47978 15.7768 0 13.0348 0C11.3701 0 9.90126 0.916586 9 2.31757C8.09874 0.916586 6.62986 0 4.96573 0C2.2232 0 0 2.47922 0 5.53881C0 5.97212 0.0493151 6.39197 0.133855 6.79666C0.82326 11.5749 5.58619 16.6159 9 18C12.4133 16.6159 17.1767 11.5749 17.8651 6.79722C17.9507 6.39253 18 5.97268 18 5.53881V5.53881Z" fill="#DD2E44"/>
</svg>
        </div>
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
export default {
    name: "Product",
    data () {
        return {
            id: [],
            img: '',
            title: '',
            description: '',
            price: [],
            quantity: []
        }
    },
    computed: {
        products () {
            return this.$store.state.products 
        }
    },
    methods: {
        handleProducts (id) {
            this.$store.commit('SHOW_PRODUCT', {id})
        },
        handleFavorite () {
            this.$store.commit('FAVORITE')
        },
        handleBorrow () {
            this.$store.commit('BORROW_BOOK')
        },
        handleBuy () {
            this.$store.commit('BUY_BOOK')
        }
    }
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
        .white-heart {
            visibility: visible;
        }
        .red-heart {
            visibility: hidden;
            transform: translateX(-18px);
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