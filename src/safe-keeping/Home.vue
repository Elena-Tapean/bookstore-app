<template>
    <main class="home-page main-grid">
      <h1>Welcome to Es Bookstore</h1>
      <q style="font-style: italic; quotes: none;">Read, experience, inspire.</q>
      <br/>
      <br/>
      <input type="text" v-model="search" @input="handleSearch" placeholder="search product" />
      <br/>
      <br/>
      <ul>
        <li v-for="product in products" :key="product.id">
          <router-link :to="`/product/${product.id}`">
            {{ product.name }}
        </router-link>
        </li>
      </ul>
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
    handleSearch () {
      this.$store.commit('SEARCH_PRODUCTS', this.searchString)
    }
  }
}
</script>
  
<style lang="scss">
  .home-page {
    @media only screen and (min-width: 0) {
      height: 100%;
      
      ul, li {
        list-style-type: none;
      }
      ul {
        width: 88%;
        max-width: 420px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
      li {
        height: 240px;
        margin-bottom: 24px;
        border-radius: 4px;
        font-size: 20px;
        border: 1px solid cadetblue;
        background-color: lightblue;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }

    @media only screen and (min-width: 1024px) {
      ul, li {
        list-style-type: none;
      }
      ul {
        display: flex;
        width: 88%;
        max-width: 420px;
        margin: 0 auto;
      }
      li {
        height: 100px;
        margin-bottom: 24px;
        border-radius: 4px;
        font-size: 20px;
        border: 1px solid cadetblue;
        background-color: lightblue;
        display: flex;
        justify-content: space-around;
      }
    }
  }
</style>