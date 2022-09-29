<template>
    <div class="main-grid">
        <h1>Here are the products divided in genres:</h1>
    <ul>
        <li v-for="genre in genres" :key="genre.id" >
            <h2>{{genre.title}}</h2>
            <ul>
                <li v-for="collection in genre.collections" :key="collection.id">
                    <router-link :to="`/collectionsview/${collection.id}/${genre.id}`">{{collection.title}}</router-link>
                </li>
            </ul>
        </li>
    </ul>
    </div>
</template>

<script>
export default {
    name: 'Home',
    computed: {
        genres () {
            return this.$store.state.genres
        }
    }
}
</script>