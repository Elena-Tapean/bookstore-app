<template>
    <main class="authors-page main-grid">
        <h2>{{ author.name }}</h2>
        <img src="" alt="author photo" />
        <h3>Birthday:</h3>
        <span>{{ author.birthday }}</span>
        <h3>Nationality:</h3>
        <span>{{ author.nation }}</span>
        <h3>Quote:</h3>
        <q>{{ author.quote }}</q>
        <h3>Biography:</h3>
        <p>{{ author.bio }}</p>
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
            
            img {
                width: 120px;
                height: 100px;
                margin: 5px;
            }
            h2 {
                font-size: 21px;
                font-style: normal;
            }
            h3 {
                font-size: 18px;
                font-style: normal;
            }
            p {
                margin: 0 20px;
                font-size: 16px;
                text-align: justify;
                text-indent: 30px;
                line-height: 2;
            }
            span {
                margin: 0 auto;
                margin-bottom: 18px;
                display: flex;
                justify-content: center;
            }
            q {
                font-size: 17px;
                font-style: italic;
            }
        }

        @media only screen and (min-width: 1024px) {
            img {
                width: 120px;
                height: 100px;
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
            p {
                margin: 0 20px;
                font-size: 18px;
                text-align: justify;
                text-indent: 30px;
                line-height: 2;
            }
            span {
                margin: 0 auto;
                margin-bottom: 24px;
                display: flex;
                justify-content: center;
            }
            q {
                font-size: 18px;
                font-style: italic;
            }
        }
}
</style>