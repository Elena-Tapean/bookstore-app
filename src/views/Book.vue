<template>
    <main class="book-page main-grid">
        <h1>Book #{{ this.$router.currentRoute.params.id }}</h1>
    </main>
</template>

<script>
    export default {
        name: 'book',
        created () {
            console.log(`go to server and get the book with id ${this.$router.currentRoute.params.id}`)
        }
    }
</script>

<style lang="scss">
.book-page {
    @media only screen and (min-width: 0) {
        
    }
}
</style>