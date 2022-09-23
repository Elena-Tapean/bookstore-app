<template>
    <div>
        <h1>Title</h1>
        <p>Description</p>
    </div>
</template>

<script>
export default {
    name: 'ProductView',
    computed: {
        products () {
            this.$store.state.products
        }
    }
}
</script>