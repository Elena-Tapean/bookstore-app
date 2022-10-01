<template>
    <main class="authors-page main-grid">
        <h2>{{ author.name }}</h2>
        <br/>
        <h3>Life</h3>
        <p>...</p>
        <br/>
        <h3>Books</h3>
        <p>...</p>
        <br/>
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
        }
}
</style>