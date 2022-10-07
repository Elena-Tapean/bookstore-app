<template>
    <main class="basket-page main-grid">
        <h1>My Shopping Basket</h1>
        <ul>
            <li v-for="product in basket" :key="product.id">
                <router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
            </li>
        </ul>
    </main>
</template>

    <!--
    urmeaza stilizarea si butonul buy
    trebuie sa adaug cantitatea produselor in cos
    si sa pun un buton mic prin care user-ul sterge produsul daca nu-l mai doreste cu alert "Product removed!"
    sau un buton sa mai adauge produsul respectiv "Product added!"
    apoi pun un buton de BUY care are un alert "Are you sure?"
    -->

<script>
export default {
    name: 'Basket',
    computed: {
        basket () {
            return this.$store.state.basket
        }, 
        products () {
            return this.$store.state.products
        }
    }
}
</script>

<style lang="scss">
.basket-page {
    @media only screen and (min-width: 0) {

    }
}
</style>