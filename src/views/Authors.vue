<template>
    <main class="authors-page main-grid">
        <h2>{{ author.name }}</h2>
        <img class="author-img" :src="author.img" alt="author photo" />
        <h3>Birthday:</h3>
        <span>{{ author.birthday }}</span>
        <h3>Nationality:</h3>
        <span>{{ author.nation }}</span>
        <h3>Quote:</h3>
        <q>{{ author.quote }}</q>
        <h3>Biography:</h3>
        <p v-html="author.bio" />
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
            margin-bottom: 24px;
            
            .author-img {
                width: 230px;
                height: 300px;
                margin: 0 auto;
            }
            h2 {
                font-size: 21px;
                font-style: normal;
            }
            h3 {
                font-size: 18px;
                font-style: normal;
            }
            span {
                margin: 0 auto;
                margin-bottom: 18px;
                display: flex;
                justify-content: center;
            }
            q {
                margin: 0 auto;
                font-size: 17px;
                font-style: italic;
                quotes: none;
            }
        }

        @media only screen and (min-width: 1024px) {
            .author-img {
                width: 320px;
                height: 400px;
                margin: 5px;
            }
            h2 {
                font-size: 24px;
                font-style: normal;
            }
            h3 {
                font-size: 21px;
                font-style: normal;
            }
            span {
                margin: 0 auto;
                margin-bottom: 24px;
                display: flex;
                justify-content: center;
            }
            q {
                margin: 0 auto;
                font-size: 18px;
                font-style: italic;
                quotes: none;
            }
        }
}
</style>