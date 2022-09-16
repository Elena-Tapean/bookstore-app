<template>
    <main class="home-page main-grid">
      <h1>Home Page</h1>
      <input type="text" 
            @input="handleSearch"
            v-model="search"
            placeholder="search product..." />
      <br/>
      <br/>
      <ul>
        <li v-for="item in products" 
            :key="item.id">
          <router-link :to="`/book/${item}`">
            {{ item.title }}
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
    computed: {
      products () {
        return this.$store.state.products 
      }
    },
    methods: {
      handleSearch() {
        this.$store.commit('SEARCH_PRODUCTS', this.search)
      }
    }
}
</script>
  
<style lang="scss">
  .home-page {
    @media only screen and (min-width: 0) {
      height: 100%;
      img {
        width: 120px;
        height: 100px;
      }
      ul {
        width: 88%;
        max-width: 420px;
        margin: 0 auto;
      }
      li {
        height: 240px;
        margin-bottom: 24px;
        border-radius: 4px;
        font-size: 20px;
        border: 1px solid cadetblue;
        background-color: lightblue;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
            width: 120px;
            height: 100px;
            margin: 5px;
            align-items: center;
        }
    }

    @media only screen and (min-width: 1024px) {
      ul {
        max-width: 900px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          width: 32%;
        }
      }
    }
  }
</style>