<template>
    <div>
        <h1>Product</h1>
        <p>Description</p>
    </div>
</template>

<script>
export default {
    name: 'ProductView',
    computed () {
        this.$store.state.categories
    }
}
</script>