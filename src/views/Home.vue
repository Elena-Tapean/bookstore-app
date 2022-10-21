<template>
    <main class="home-page main-grid">
      <h2>New books</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          <router-link :to="`/product/${product.id}`">
            <img class="product-img" :src="product.img" alt="book cover" />
            <br/>
            {{ product.name }}
          </router-link>
          <br/>
          <span>{{ product.price }} Lei</span>
        </li>
      </ul>
      <br/>
    </main>
</template>
  
<script>
export default {
  name: "Home",
    data () {
      return {
        search: '',
      }
    },
    created () {
      this.$store.dispatch('get_data')
    },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
  }
}
</script>
  
<style lang="scss">
  .home-page {
    @media only screen and (min-width: 0) {
      height: 100%;
      margin-bottom: 24px;

      h2 {
        font-size: 24px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-style: normal;
        text-align: center;
      }
      ul, li {
        list-style-type: none;
      }
      ul {
        margin: 0 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      li {
        margin: 0 10px;
        border: none;
      }
      .product-img {
        width: 120px;
        height: 150px;
        border-radius: 5px;
      }
      a {
        text-decoration: none;
        font-size: 18px;
        font-style: normal;
        color: darkblue;
        font-family: Arial, Helvetica, sans-serif;
      }
      a:hover {
        text-decoration: underline;
      }
    }

    @media only screen and (min-width: 1024px) {
      h2 {
        font-size: 33px;
      }
      input {
        margin: 24px 0 5px 0;
        font-size: 16px;
      }
      .product-img {
        width: 180px;
        height: 220px;
        margin-bottom: 10px;
      }
      a {
        font-size: 18px;
      }
    }
  }
</style>