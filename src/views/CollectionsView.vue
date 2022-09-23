<template>
    <div>
        <h1>{{$router.currentRoute.params.name}} Collection {{$router.currentRoute.params.id}}</h1>
        <ul>
            <li v-for="product in products">
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
            const categories = this.$store.state.categories 
            const category = categories.filter( (category) => category.id === this.collectionName )
            console.log(category)
            return []
        }
    }
}
</script>