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
                    basket ({{ basketTotal }})
                </span>
            </router-link>
            <router-link to="/register">
                <button @click="handleRouteChange">
                    <svg width="18" height="15" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 7.34784 0.948212 4.8043 2.63604 2.92893C4.32387 1.05357 6.61305 0 9 0C11.3869 0 13.6761 1.05357 15.364 2.92893C17.0518 4.8043 18 7.34784 18 10C18 12.6522 17.0518 15.1957 15.364 17.0711C13.6761 18.9464 11.3869 20 9 20C6.61305 20 4.32387 18.9464 2.63604 17.0711C0.948212 15.1957 0 12.6522 0 10ZM9 1.4344C7.50577 1.43445 6.04377 1.91701 4.79184 2.82335C3.53991 3.72969 2.55202 5.02076 1.94835 6.53949C1.34468 8.05822 1.15126 9.73915 1.3916 11.3778C1.63195 13.0164 2.29571 14.5421 3.30213 15.7693C3.91313 14.7059 4.7555 13.8309 5.75139 13.2249C6.74729 12.619 7.86457 12.3018 9 12.3026C10.1355 12.3017 11.2528 12.6188 12.2487 13.2248C13.2446 13.8307 14.087 14.7058 14.6979 15.7693C15.7043 14.5421 16.3681 13.0164 16.6084 11.3778C16.8487 9.73915 16.6553 8.05822 16.0516 6.53949C15.448 5.02076 14.4601 3.72969 13.2082 2.82335C11.9562 1.91701 10.4942 1.43445 9 1.4344ZM13.7317 16.7628C13.2508 15.8419 12.5606 15.0777 11.7301 14.5466C10.8997 14.0156 9.95817 13.7364 9 13.737C8.04183 13.7364 7.10034 14.0156 6.26988 14.5466C5.43943 15.0777 4.74918 15.8419 4.26831 16.7628C5.62009 17.934 7.28583 18.5686 9 18.5656C10.7829 18.5656 12.4244 17.8922 13.7317 16.7628ZM5.80658 8.49766C5.80658 7.55661 6.14303 6.6541 6.74191 5.98867C7.34079 5.32325 8.15305 4.94942 9 4.94942C9.84695 4.94942 10.6592 5.32325 11.2581 5.98867C11.857 6.6541 12.1934 7.55661 12.1934 8.49766C12.1934 9.43871 11.857 10.3412 11.2581 11.0066C10.6592 11.6721 9.84695 12.0459 9 12.0459C8.15305 12.0459 7.34079 11.6721 6.74191 11.0066C6.14303 10.3412 5.80658 9.43871 5.80658 8.49766ZM9 6.38381C8.75016 6.38381 8.50278 6.43849 8.27196 6.54472C8.04114 6.65095 7.83142 6.80666 7.65476 7.00295C7.4781 7.19923 7.33796 7.43226 7.24235 7.68873C7.14675 7.94519 7.09754 8.22007 7.09754 8.49766C7.09754 8.77526 7.14675 9.05013 7.24235 9.30659C7.33796 9.56306 7.4781 9.79609 7.65476 9.99237C7.83142 10.1887 8.04114 10.3444 8.27196 10.4506C8.50278 10.5568 8.75016 10.6115 9 10.6115C9.50456 10.6115 9.98846 10.3888 10.3452 9.99237C10.702 9.59595 10.9025 9.05829 10.9025 8.49766C10.9025 7.93703 10.702 7.39937 10.3452 7.00295C9.98846 6.60652 9.50456 6.38381 9 6.38381Z" fill="rgb(228, 83, 131)"/>
</svg> {{ 'Register' }}
                </button>
            </router-link>
            <router-link to="/login">
                <button @click="handleRouteChange">
                    <svg width="20" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.586 8L4.05 5.464L5.464 4.05L10.414 9L5.464 13.95L4.05 12.536L6.586 10H0V8H6.586ZM8 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H8V16H16V2H8V0Z" fill="rgb(228, 83, 131)"/>
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
        background: linear-gradient(rgb(228, 83, 131), rgb(218, 30, 93));
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
            color: rgba(0, 0, 0, 0.8);
            font-size: 21px;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }
        button {
            margin: 0 auto;
            padding: 2px 4px;
            border: none;
            border-radius: 5px;
            background-color: rgb(255, 255, 255);
            color: rgb(228, 83, 131);
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
            margin: 0 10px;
            display: inline-block;
            font-size: 20px;
        }
        button {
            margin: 0 20px;
            font-size: 19px;
        }
    }
    .router-link-exact-active {
        color: rgb(255, 255, 255);
        font-weight: bold;
    }
}
</style>