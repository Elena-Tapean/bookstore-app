<template>
    <main class="profile-page main-grid">
        <div class="shader-bg">
            <h2>Welcome, {{ user.name }}!</h2>
            <p>October is a versatile season. Poetry, mysteries, thrillers, crimes, horror, fantasy, romances. It's the right season to put on a warm blanket around your shoulders, have a strong tea nearby or a fancy hot chocolate and a good book to read. Enjoy this year's Halloween!</p>
            <ul>
                <li v-for="product in products" :key="product.id">
                    <router-link :to="`/product/${product.id}`">
                        <img class="product-img" :src="product.img" alt="book cover" />
                        <br/>
                        {{product.name}}
                    </router-link>
                    <br/>
                    <span>{{product.price}} Lei</span>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'Profile',
        data () {
            return {
            }
        },
        created () {
            this.$store.dispatch('get_data')
        },
        computed: {
            user () {
                return this.$store.state.user
            },
            products () {
                return this.$store.state.products
            }
        }
    }
</script>

<style lang="scss">
.profile-page {
    @media only screen and (min-width: 0) {
        height: 100%;
        background-image: url('../assets/profile.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        .shader-bg {
            margin: 15px 25px;
            padding: 3px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 5px;
        }
        h2 {
            font-size: 25px;
            color: black;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            font-style: normal;
            text-align: center;
        }
        p {
            margin: 0 30px;
            margin-bottom: 5px;
            font-size: 18px;
            color: black; 
            font-family: Arial, Helvetica, sans-serif;
            text-indent: 30px; 
            text-align: justify; 
            line-height: 2;
        }
        ul, li {
            list-style-type: none;
        }
        ul {
            margin: 0 5px;
            padding: 0 5px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        li {
            margin: 10px;
            border: none;
        }
        .product-img {
            width: 120px;
            height: 150px;
            border-radius: 5px;
        }
        span {
            color: rgb(218, 30, 93);
        }
        a {
            text-decoration: none;
            font-size: 18px;
            font-style: normal;
            color: black;
            font-family: Arial, Helvetica, sans-serif;
        } 
        a:hover {
            text-decoration: underline;
        }
    }

    @media only screen and (min-width: 1024px) {
        .shader-bg {
            margin: 15px 180px;
            padding: 10px 20px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 5px;
        }
        h2 {
            font-size: 28px;
        }
        p {
            margin: 0 200px;
            margin-bottom: 10px;
            font-size: 20px;
        }
        ul {
            margin: 0 10px;
            padding: 5px 10px;
        }
        li {
            margin: 5px;
        }
        .product-img {
            width: 120px;
            height: 150px;
            border-radius: 5px;
        }
        span {
            color: rgb(218, 30, 93);
        }
        a {
            text-decoration: none;
            font-size: 18px;
            font-style: normal;
            color: black;
            font-family: Arial, Helvetica, sans-serif;
        } 
    }
}   
</style>