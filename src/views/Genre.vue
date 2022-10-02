<template>
    <main class="genre-page main-grid">
        <h2>{{ genre.name }}</h2>
        <br/>
        <img src="" alt="book cover" />
        <br/>
        <h3>Description:</h3> 
        <p>{{ genre.description }}</p>
        <br/>
    </main>
</template>

<script>
export default {
    name: 'Genre',
    data () {
        return {
        //dangerouslySetInnerHTML
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

            img {
                width: 250px;
                height: 220px;
                border-radius: 5px;
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
                margin: 0 30px;
                font-size: 16px;
                text-align: justify;
                text-indent: 30px;
                line-height: 2;
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
                margin: 0 50px;
                font-size: 19px;
                text-align: justify;
                text-indent: 30px;
                line-height: 2;
            }
        }
}
</style>