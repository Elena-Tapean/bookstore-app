<template>
    <footer class="footer-page">
        <nav>
            <router-link v-for="item in nav" 
                        :to="item.to">
            <span>{{item.name}}</span>
            </router-link>
        </nav>
    </footer>
</template>

<script>
    export default {
        name: 'MainFooter',
        data () {
            return {
                nav: [
                {
                    name: 'Home',
                    to: '/'
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
                    name: 'Create Account',
                    to: '/account'
                },
                {
                    name: 'Login',
                    to: '/login'
                },
                {
                    name: 'Profile',
                    to: '/profile'
                },
                {
                    name: 'Give',
                    to: '/give'
                }
            ]
            }
        }
    }
</script>

<style lang="scss">
.footer-page {
    @media only screen and (min-width: 0) {
        padding: 24px;
        background-color: #000;
        a {
            margin: 12px;
            display: block;
            color: #fff;
            text-decoration: none;
            font-size: 16px;
        }
    }
    @media only screen and (min-width: 1024px) {
        nav {
            display: flex;
            justify-content: center;
        }
    }
} 
</style>