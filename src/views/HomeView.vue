<template>
    <div>
        <h1>Here are the collections</h1>
        <ul>
            <li v-for="category in categories" :key="category.id" >
                <h2>{{category.title}}</h2>
                <ul>
                    <li v-for="collection in category.collections" :key="collection.id">
                        <router-link :to="`/collection/${category.id}/${collection.id}`">{{collection.title}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
    computed: {
        categories () {
            return this.$store.state.categories
        }
    }
}
</script>