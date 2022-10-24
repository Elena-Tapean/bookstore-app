<template>
    <main class="authors-page main-grid">
        <router-link class="go-back" to="/"> 
           Go Back
        </router-link>
        <div class="shader-bg">
            <div class="min-div">
                <img class="product-img" :src="author.img" alt="author photo" />
                <h1>{{ author.name }}</h1>
                <h2>Birthday:</h2>
                <span>{{ author.birthday }}</span>
                <h2>Nationality:</h2>
                <span>{{ author.nation }}</span>
                <h2>Quote:</h2>
                <q>{{ author.quote }}</q>
                <h2>Biography:</h2>
                <p v-html="author.bio" />
            </div>
        </div>
        <div class="shader2-bg">
            <div class="flex-div">
                <img class="product-img" :src="author.img" alt="author photo" />
                <div class="info-div">
                    <h1>{{ author.name }}</h1>
                    <h2>Birthday:</h2>
                    <span>{{ author.birthday }}</span>
                    <h2>Nationality:</h2>
                    <span>{{ author.nation }}</span>
                    <h2>Quote:</h2>
                    <q>{{ author.quote }}</q>
                </div>
            </div>
            <div class="flex2-div">
                <h2>Biography:</h2>
                <p v-html="author.bio" />
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Authors',
    data () {
        return {
        }
    },
    computed: {
        authors () {
            return this.$store.state.authors
        },
        author () {
            const id = this.$router.currentRoute.params.id
            const authors = this.$store.state.authors
            const author = authors.filter(obj => obj.id.toString() === id)[0]
            return author
        }
    }
}
</script>

<style lang="scss">
    .authors-page {
        @media only screen and (min-width: 0) {
            height: 100%;
            background-image: url('../assets/home.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        
            .shader-bg {
                margin: 15px 25px;
                padding: 3px;
                background-color: rgba(255, 255, 255, 0.8);
                border-radius: 5px;
            }
            .shader2-bg {
                display: none;
            }
            .flex-div {
                display: none;
            }
            .flex2-div {
                display: none;
            }
            h1 {
                font-size: 28px;
                color: black;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            }
            h2 {
                font-size: 19px;
                color: black;
                font-family: Arial, Helvetica, sans-serif;
            }
            span {
                margin: 0 auto;
                font-size: 18px;
                color: black;
                font-family: Arial, Helvetica, sans-serif;
            }
            .product-img {
                margin-top: 15px;
                width: 220px;
                height: 300px;
                border-radius: 5px;
            }
            .go-back {
                margin: 20px;
                display: flex;
                font-size: 18px;
                font-style: italic;
                color: rgb(218, 30, 93);
                text-decoration: none;
            }
            q {
                margin: 5px auto;
                font-size: 17px;
                font-style: italic;
                quotes: none;
            }

        }

        @media only screen and (min-width: 1024px) {
            .min-div {
                display: none;
            }
            .shader-bg {
                display: none;
            }
            .info-div {
                display: inline-block;
                margin: 0 auto;
            }
            .flex-div {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .flex2-div {
                display: flex;
                flex-wrap: wrap;
                h2 {
                    margin-left: 60px;
                    text-align: left;
                }
            }
            .shader2-bg {
                display: inline-block;
                margin: 15px 270px;
                margin-bottom: 30px;
                padding: 0 35px;
                background-color: rgba(255, 255, 255, 0.8);
                border-radius: 5px;
            }
            h1 {
                margin: 10px;
                font-size: 27px;
            }
            h2 {
                margin: 15px;
                font-size: 18px;
            }
            p {
                margin: 0 3px;
                margin-bottom: 30px;
            }
            span {
                margin: 0 5px;
                font-size: 17px;
            }
            .product-img {
                margin: 15px 8px;
                margin-left: 30px;
                width: 270px;
                height: 420px;
                border-radius: 5px;
            }
            .go-back {
                margin: 5px;
                margin-left: 50px;
                display: flex;
                font-size: 20px;
            }
            q {
                margin: 10px auto;
                font-size: 18px;
                font-style: italic;
                quotes: none;
            }
        }
}
</style>