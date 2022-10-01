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
            select {
                border: none;
                border-radius: 5px;
                background-color: lightblue;
                font-size: 18px;
            }
            ul, li {
                list-style-type: none;
            }
            ul {
                width: 40%;
                max-width: 220px;
                margin: 0 auto;
            }
            li {
                height: 100px;
                margin-bottom: 24px;
                border-radius: 4px;
                font-size: 20px;
                border: 1px solid cadetblue;
                background-color: lightblue;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }
}
</style>