<template>
    <header class="nav-bar" ref="navBar">
        <div>
            <img src="../assets/books_logo.png" alt="logo" />
            <span>Es Bookstore</span>
            <HambMenuIcon :isOpen="isOpen" 
                          @action="handleHambIcon" />
        </div>

        <!--<div class="search-box">
            <input type="text"
                    @input="handleSearch"
                    v-model="search"
                    placeholder="search..." />
                <ul v-show="search">
                    <li v-for="product in products" 
                            :key="product?.id">
                        <router-link :to="`/product/${product?.id}`">
                            {{product.title}}
                        </router-link>
                    </li>
                </ul>
        </div>-->

        <nav>
            <div v-for="item in nav" :key="item.name">
                <router-link v-if="!item.role"
                        :to="item.to">
                <span @click="handleRouteChange">{{item.name}}</span>
                </router-link>
                <router-link v-if="item.role && (item.role === user.role)" 
                        :to="item.to">
                <span @click="handleRouteChange">{{item.name}}</span>
                </router-link>
            </div>

            <span class="basket-logo"><svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66667 3.44828C6.66667 1.72414 7.91667 0 10 0H15C17.0833 0 18.3333 1.72414 18.3333 3.44828V7.75862H23.3333C23.7754 7.75862 24.1993 7.94027 24.5118 8.26361C24.8244 8.58695 25 9.02549 25 9.48276V12.069C25.0001 12.5114 24.8358 12.9369 24.5411 13.2575C24.2464 13.5781 23.8438 13.7693 23.4167 13.7914L20.9125 22.531C20.7084 23.244 20.2869 23.8696 19.711 24.3146C19.135 24.7595 18.4355 24.9999 17.7167 25H7.26333C6.55046 25 5.85638 24.7635 5.28298 24.3253C4.70959 23.8872 4.28708 23.2704 4.0775 22.5655L1.46417 13.781C1.06011 13.7299 0.688118 13.5275 0.418387 13.2121C0.148656 12.8967 -0.000166175 12.4901 1.39246e-07 12.069V9.48276C1.39246e-07 9.02549 0.175595 8.58695 0.488156 8.26361C0.800716 7.94027 1.22464 7.75862 1.66667 7.75862H6.66667V3.44828ZM8.33333 7.75862H16.6667V3.44828C16.6667 1.2931 15.4167 0.862069 14.1667 0.862069H10.8333C9.58333 0.862069 8.33333 1.2931 8.33333 3.44828V7.75862ZM16.6667 9.48276H1.66667V12.069H23.3333V9.48276H18.3333V10.3448C18.3333 10.5735 18.2455 10.7927 18.0893 10.9544C17.933 11.1161 17.721 11.2069 17.5 11.2069C17.279 11.2069 17.067 11.1161 16.9107 10.9544C16.7545 10.7927 16.6667 10.5735 16.6667 10.3448V9.48276ZM20.2617 13.7931L21.02 14.5776L21.635 13.9414L21.6767 13.7931H20.2617ZM17.4842 14.5776L18.2425 13.7931H16.7258L17.4842 14.5776ZM13.1917 13.7931L13.95 14.5776L14.7083 13.7931H13.1917ZM10.4142 14.5776L11.1725 13.7931H9.65583L10.4142 14.5776ZM6.87833 14.5776L7.63667 13.7931H6.12L6.87833 14.5776ZM3.21167 13.7931L3.42 14.4966L4.1 13.7931H3.21167V13.7931ZM4.01417 16.4922L4.2525 17.2931L4.52083 17.0155L4.01417 16.4922ZM21.0842 15.8629L21.02 15.7966L19.8417 17.0155L20.5458 17.744L21.0842 15.8629V15.8629ZM20.1458 19.1388L20.2758 18.6845L19.2517 17.625L18.0733 18.8448L19.2517 20.0638L20.1458 19.1388ZM19.4683 21.506L19.2517 21.2828L18.0733 22.5017L18.58 23.0259C18.9267 22.8095 19.1933 22.4638 19.315 22.0414L19.4683 21.5069V21.506ZM17.6433 23.2759L17.485 23.1121L17.3258 23.2759H17.6425H17.6433ZM16.1467 23.2759L16.895 22.5017L15.7167 21.2828L14.5383 22.5017L15.2858 23.2759H16.1467V23.2759ZM13.79 23.2759H14.1075L13.9492 23.1121L13.79 23.2759ZM12.6117 23.2759L13.3592 22.5017L12.1808 21.2828L11.0025 22.5017L11.7508 23.2759H12.6117ZM10.2542 23.2759H10.5717L10.4133 23.1121L10.255 23.2759H10.2542ZM9.07583 23.2759L9.82417 22.5017L8.645 21.2828L7.46667 22.5017L8.215 23.2759H9.07583V23.2759ZM7.01833 23.2569L6.8775 23.1112L6.7875 23.2043C6.8625 23.2276 6.94 23.2448 7.01833 23.2569V23.2569ZM6.05667 22.7414L6.28833 22.5017L5.58583 21.775L5.67 22.0595C5.74833 22.3207 5.8825 22.5526 6.05667 22.7414ZM5.06167 20.0147L5.11 20.0638L6.28833 18.8448L5.11 17.625L4.53 18.225L5.06167 20.0147V20.0147ZM5.11 13.9681L3.93167 15.1871L5.11 16.406L6.28833 15.1871L5.11 13.9681V13.9681ZM6.8775 15.7966L5.7 17.0155L6.87833 18.2353L8.05667 17.0155L6.87833 15.7966H6.8775ZM8.645 17.625L7.46667 18.8448L8.645 20.0638L9.82417 18.8448L8.645 17.625V17.625ZM9.235 17.0155L10.4133 18.2353L11.5917 17.0155L10.4133 15.7966L9.235 17.0155ZM10.4133 19.4543L9.235 20.6733L10.4133 21.8922L11.5917 20.6733L10.4133 19.4543ZM12.1808 20.0638L13.3592 18.8448L12.1808 17.625L11.0025 18.8448L12.1808 20.0638V20.0638ZM8.645 16.406L9.82417 15.1871L8.645 13.9681L7.46667 15.1871L8.645 16.406V16.406ZM16.3058 20.6733L17.4842 21.8922L18.6625 20.6733L17.4842 19.4543L16.3058 20.6733ZM18.6625 17.0155L17.4842 15.7966L16.3058 17.0155L17.4842 18.2353L18.6625 17.0155ZM13.9483 21.8922L15.1275 20.6733L13.9483 19.4543L12.77 20.6733L13.9483 21.8922ZM14.5383 15.1871L15.7167 16.406L16.895 15.1871L15.7167 13.9681L14.5383 15.1871ZM13.3592 15.1871L12.1808 13.9681L11.0025 15.1871L12.1808 16.406L13.3592 15.1871ZM19.2525 16.406L20.4308 15.1871L19.2517 13.9681L18.0733 15.1871L19.2525 16.406ZM12.77 17.0155L13.9483 18.2353L15.1275 17.0155L13.9483 15.7966L12.77 17.0155ZM6.87833 21.8922L8.05583 20.6733L6.8775 19.4543L5.7 20.6724L6.87833 21.8914V21.8922ZM14.5383 18.8448L15.7167 20.0638L16.895 18.8448L15.7167 17.625L14.5383 18.8448Z" fill="black"/>
</svg> ({{ basketTotal }})</span>
            
            <button @click="handleLogout">
                {{ user.name ? 'LOGOUT' : 'LOGIN' }}
            </button>
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
                    name: 'Product',
                    to: '/product/:id'
                },
                {
                    name: 'Profile',
                    to: '/profile'
                },
                {
                    name: 'About',
                    to: '/about'
                },
                {
                    name: 'Contact',
                    to: '/contact'
                },
                {
                    name: 'Cpanel',
                    to: '/cpanel',
                    role: 'admin'
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
      },
      user () {
        return this.$store.state.user
      },
      basket () {
        return this.$store.state.basket
      },
      basketTotal () {
        return this.basket.reduce((acc, curr) => acc + curr.count, 0)
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
        handleSearch () {
            this.$store.commit('SEARCH_PRODUCTS', this.search)
        },
        handleLogout () {
            this.$store.dispatch('logout')
        },
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

        .basket-logo {
            display: none;
        }
        //.search-box {
            //position: relative;
            //ul {
                //position: absolute;
                //top: 50px;
                //left: 0;
            //}
        //}

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
        button {
            margin: 0 auto;
            padding: 4px 7px;
            border: none;
            border-radius: 5px;
            background-color: #3CB371;
            color: white;
            font-size: 16px;
        }
    }
    @media only screen and (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: inherit;
        
        nav {
            margin-top: 0;
            display: flex;
            a {
                margin: 0 16px;
                display: inline-block;
                font-size: 18px;
            }
        }
        .basket-logo {
            display: flex;
        }
        button {
            margin: 0 20px;
        }
    }
    .router-link-exact-active {
        color: red;
        text-decoration: underline;
    }
}
</style>