<template>
    <main class="genre-page main-grid">
        <h2>{{ genre.name }}</h2>
        <br/>
        <img class="genre-img" :src="genre.img" alt="book cover" />
        <br/>
        <h3>Description:</h3> 
        <p v-html="genre.description" />
        <br/>
    </main>
</template>

<script>
export default {
    name: 'Genre',
    data () {
        return {
        }
    },
    computed: {
        genres () {
            return this.$store.state.genres
        },
        genre () {
            const id = this.$router.currentRoute.params.id
            const genres = this.$store.state.genres
            const genre = genres.filter(obj => obj.id.toString() === id)[0]
            return genre
        }
    }
}
</script>

<style lang="scss">
    .genre-page {
        @media only screen and (min-width: 0) {
            height: 100%;
            margin-bottom: 24px;

            .genre-img {
                width: 380px;
                height: 450px;
                border-radius: 5px;
                float: center;
            }
            h2 {
                font-size: 21px;
                font-style: normal;
            }
            h3 {
                font-size: 18px;
                font-style: normal;
            }
        }

        @media only screen and (min-width: 1024px) {
            .genre-img {
                width: 420px;
                height: 350px;
                margin: 35px;
                float: right;
            }
            h2 {
                font-size: 24px;
                font-style: normal;
            }
            h3 {
                font-size: 21px;
                font-style: normal;
            }
        }
}
</style>