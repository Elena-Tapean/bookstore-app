<template>
    <header class="nav-bar" ref="navBar">
        <div>
            <a class="img-logo" href="/">
                <img class="img-logo" src="../assets/logo.png" alt="logo" />
            </a>
            <input type="text" 
                    v-model="search" 
                    @input="handleSearch" 
                    placeholder="search product..." />
            <HambMenuIcon :isOpen="isOpen" @action="handleHambIcon" />
        </div>
        <nav>
            <div v-for="item in nav" :key="item.name">
                <router-link v-if="!item.role" :to="item.to">
                    <span @click="handleRouteChange">{{ item.name }}</span>
                </router-link>
                <router-link v-if="item.role && (item.role === user.role)" 
                        :to="item.to">
                    <span @click="handleRouteChange">{{ item.name }}</span>
                </router-link>
            </div>
            <router-link to="/basket">
                <span class="basket-logo" @click="handleRouteChange">
                    Basket ({{ basketTotal }})
                </span>
            </router-link>
            <router-link to="/register">
                <button @click="handleRouteChange">
                    <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM9 3C10.93 3 12.5 4.57 12.5 6.5C12.5 8.43 10.93 10 9 10C7.07 10 5.5 8.43 5.5 6.5C5.5 4.57 7.07 3 9 3ZM16 16H2V15.77C2 15.15 2.28 14.57 2.76 14.19C4.47 12.82 6.64 12 9 12C11.36 12 13.53 12.82 15.24 14.19C15.72 14.57 16 15.16 16 15.77V16Z" fill="white"/>
</svg> {{ 'Register' }}
                </button>
            </router-link>
            <router-link to="/login">
                <button @click="handleRouteChange">
                    <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.586 8L4.05 5.464L5.464 4.05L10.414 9L5.464 13.95L4.05 12.536L6.586 10H0V8H6.586ZM8 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H8V16H16V2H8V0Z" fill="white"/>
</svg> {{ user.name ? 'Log Out' : 'Log In' }}
                </button>
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
                    name: 'Game',
                    to: '/game'
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
            barHeight: 82
        }
    },
    created () {
        this.$store.dispatch('get_data')
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
        // return this.basket.length
         return this.basket.reduce((acc, curr) => acc + curr.count, 0)
      }
    },
    methods: {
        handleSearch () {
            this.$store.commit('SEARCH_PRODUCTS', this.search)
        },
        handleHambIcon () {
            this.isOpen = !this.isOpen
            this.$refs.navBar.style.height = this.isOpen ? '100%' : `${this.barHeight}px`
        },
        handleRouteChange () {
            this.isOpen = false
            this.$refs.navBar.style.height = `${this.barHeight}px`
        },
        handleLogout () {
            this.$store.dispatch('logout')
        },
        handleLeave () {
            this.$store.dispatch('leave')
        }
    }
}
</script>

<style lang="scss">
.nav-bar {
    @media only screen and (min-width: 0) {
        background-color: rgb(228, 83, 131);
        height: 82px;
        top: 0;
        left: 0;
        overflow: hidden;
        border-bottom: 1px solid rgb(218, 30, 93);
        transition: height 0.5s ease-in-out;
        z-index: 99;
        position: fixed;
        width: 100%;

        .img-logo {
            width: 30px;
            height: 45px;
            margin: 0 10px;
        }
        input {
            margin: 0 auto;
            border: 1px solid rgb(228, 83, 131);
            border-radius: 5px;
            width: 180px;
            height: 18px;
        }
        .basket-logo {
            display: flex;
            justify-content: center;
        }
        > div {
            padding: 20px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        nav {
            margin-top: 120px;
        }
        span {
            margin-left: 10px;
            font-size: 21px;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }
        a {
            margin: 25px;
            display: block;
            text-decoration: none;
            color: white;
            font-size: 21px;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }
        button {
            margin: 0 auto;
            padding: 2px 4px 0 0;
            border: none;
            border-radius: 5px;
            background-color: rgb(228, 83, 131);
            color: white;
            font-size: 21px;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }
    }
    @media only screen and (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: inherit;
        
        .img-logo {
            width: 40px;
            height: 55px;
            margin: 0 15px;
        }
        input {
            margin: 0 150px;
            border: 1px solid rgb(228, 83, 131);
            border-radius: 5px;
            width: 240px;
            height: 22px;
        }
        nav {
            margin-top: 0;
            display: flex;
            justify-content: center;
        }
        .basket-logo {
            display: flex;
        }
        span {
            margin-left: 5px;
            font-size: 19px;
        }
        a {
            margin: 0 15px;
            display: inline-block;
            font-size: 20px;
        }
        button {
            margin: 0 3px;
            font-size: 19px;
        }
    }
    .router-link-exact-active {
        color: rgb(255, 255, 255);
        font-weight: bold;
    }
}
</style>