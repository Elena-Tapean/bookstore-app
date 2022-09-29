<template>
    <div class="main-grid">
        <h1>{{$router.currentRoute.params.id}} Collection {{$router.currentRoute.params.name}}</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Collections',
    computed: {
        collectionName () {
            return this.$router.currentRoute.params.name
        },
        collectionId () {
            return this.$router.currentRoute.params.id
        },
        products () {
            const genres = this.$store.state.genres 
            const genre = genres.filter( (genre) =>  genre.id === this.collectionName )
            console.log(genre)
            return [
                {
                    //here I have to filter products
                    //thinking to try the filter() method with product[index]
                    //console.log code to HTML
                }
            ]
        }
    }
}
</script>