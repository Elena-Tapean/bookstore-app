<template>
    <main class="profile-page main-grid">
        <h1>Profile</h1>
        <h3>Welcome, reader!</h3>
        <h2>New titles this month</h2>
        <p>October is a versatile season. Poetry, mysteries, thrillers, crimes, horror, fantasy, romances. It's the right season to put on a warm blanket around your shoulders, have a strong tea nearby or a fancy hot chocolate and a good book to read. Enjoy this year's Halloween!</p>
        <br/>
        <ul>
            <li v-for="product in products" :key="product.id">
                <router-link :to="`/product/${product.id}`">
                    {{ product.name }}
                </router-link>
                <span>({{ product.collectionId}})</span>
            </li>
        </ul>
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
        margin-bottom: 24px;
 
        h3 {
            margin: 30px;
            text-align: center;
            font-size: 19px;
            font-family: Arial, Helvetica, sans-serif;
        }
        h2 {
            margin: 10px 50px;
            font-size: 20px;
            font-family: Arial, Helvetica, sans-serif;
            text-align: left;
        }
        p {
            margin: 0 30px;
            font-size: 17px;
            font-family: Arial, Helvetica, sans-serif;
            text-align: justify; 
            text-indent: 30px; 
            line-height: 2;
        }
        ul, li {
            list-style-type: none;
        }
        li {
            margin: 5px 30px;
            padding: 10px;
            border: 1px solid lightblue;
            background-color: lightcyan;
            border-radius: 4px;
        }
        a {
            text-decoration: none;
            font-size: 17px;
            font-style: italic;
            color: blue;
            font-family: Arial, Helvetica, sans-serif;
        }
        a:hover {
            text-decoration: underline;
        }
        span {
            font-size: 15px;
            font-style: normal;
            color: grey;
        }
    }

    @media only screen and (min-width: 1024px) {
        h3 {
            font-size: 21px;
        }
        h2 {
            font-size: 21px;
        }
        p {
            font-size: 18px;
        }
        ul {
            display: block;
            margin: 0 auto;
            max-width: 450px;
        }
        li {
            margin: 10px 30px;
            padding: 15px;
        }
    }
}   
</style>