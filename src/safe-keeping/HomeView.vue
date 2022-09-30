<!--<template>
    <div class="home-view main-grid">
        <h1>These are the book collections:</h1>
        <ul>
            <li v-for="(collection, index) in collections" :key="index">
                <select @change="handleCollection">
                    <option value="" selected disabled>Select collection</option>
                    <option v-for="item in collection" :key="item">{{ item }}</option>
                </select>
            </li>
        </ul>
    </div>  
</template>

<script>
export default {
    name: 'HomeView',
    data () {
        return {
        }
    },
    computed: {
        collections () {
            return this.$store.getters.collections
        }
    },
    methods: {
        handleCollection (ev) {
            this.$router.push(`/collectionsview/${ev.target.value}`)
        }
    }
}
</script>

<style lang="scss">
    .home-view {
        ul, li {
            list-style-type: none;
        }
        li {
            margin-bottom: 24px;
        }
    }
</style>-->