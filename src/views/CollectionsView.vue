<template>
    <div>
        <h1>{{$router.currentRoute.params.name}} Collection {{$router.currentRoute.params.id}}</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                <router-link :to="`/product/${product.id}`">{{ product.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CollectionsView',
    computed: {
        collectionName () {
            return this.$router.currentRoute.params.name},
        collectionId () {
            return this.$router.currentRoute.params.id},
        products () {
            const genres = this.$store.state.genres 
            const genre = genres.filter( (genre) => genre.id === this.collectionName )
            console.log(genre)
            return []
        }
    }
}
</script>