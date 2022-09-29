<template>
    <div class="main-grid">
        <h1>Title</h1>
        <p>Description</p>
    </div>
</template>

<script>
    export default {
        name: 'ProductView',
        computed: {
            products () {
                return this.$store.state.products
            }
        }
    }
</script>