<template>
    <header class="nav-bar" ref="navBar">
        <div>
            <img src="../assets/books_logo.png" alt="logo" />
            <span>Es Bookstore</span>
            <HambMenuIcon :isOpen="isOpen" 
                          @action="handleHambIcon" />
        </div>
        <div class="search-box">
            <input type="text"
                    @input="handleSearch"
                    v-model="search"
                    placeholder="search..." />
                    <ul v-show="search">
                        <li v-for="product in products" 
                            :key="product?.id">
                            <router-link :to="`/product/${product?.id}`">{{product.title}}</router-link>
                        </li>
                    </ul>
        </div>
        <nav>
            <router-link v-for="item in nav" 
                        :to="item.to">
            <span @click="handleRouteChange">{{item.name}}</span>
            </router-link>
        </nav>
    </header>
</template>

<script>
import HambMenuIcon from './HambMenuIcon.vue';
    export default {
    name: "NavBar",
    data () {
        return {
            search: '',
            nav: [
                {
                    name: 'Home',
                    to: '/'
                },
                {
                    name: 'Book',
                    to: '/book/:id'
                },
                {
                    name: 'About',
                    to: '/about'
                },
                {
                    name: 'Contact',
                    to: '/contact'
                }
            ],
            isOpen: false,
            barHeight: 52
        }
    },
    components: { 
        HambMenuIcon 
    },
    computed: {
      products () {
        return this.$store.state.products 
      }
    },
    methods: {
        handleHambIcon () {
            this.isOpen = !this.isOpen
            this.$refs.navBar.style.height = this.isOpen ? '100%' : `${this.barHeight}px`
        },
        handleRouteChange () {
            this.isOpen = false
            this.$refs.navBar.style.height = `${this.barHeight}px`
        },
        handleSearch() {
        this.$store.commit('SEARCH_PRODUCTS', this.search)
        }
    }
}
</script>

<style lang="scss">
.nav-bar {
    @media only screen and (min-width: 0) {
        height: 52px;
        top: 0;
        left: 0;
        overflow: hidden;
        border-bottom: 1px solid grey;
        transition: height 0.5s ease-in-out;
        z-index: 99;
        position: fixed;
        width: 100%;
        background-color: #fff;

        .search-box {
            position: relative;
            ul {
                position: absolute;
                top: 50px;
                left: 0;
            }
        }

        > div {
            padding: 16px 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        nav {
            margin-top: 120px;
        }
        span {
            font-size: 20px;
            margin-left: 10px;
        }
        a {
            margin: 24px 0;
            display: block;
            text-decoration: none;
            color: rgba(0, 0, 0, 0.8);
            font-size: 22px;
        }
    }
    @media only screen and (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: inherit;
        
        nav {
            margin-top: 0; 
            a {
                margin: 0 16px;
                display: inline-block;
                font-size: 18px;
            }
        }
    }
    .router-link-exact-active {
        color: red;
        text-decoration: underline;
    }
}
</style>