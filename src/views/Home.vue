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
        <li v-for="product in products" 
            :key="product?.id">
          <router-link :to="`/product/${product?.title}`">
            {{ product.title }}
          </router-link>
          <br/>
          <div>
            <button @click="decrement(product.id)">-</button>
            <span>{{ product.count || 0 }}</span>
            <button :disabled="product.quantity && product.quantity <= product.count" 
                    @click="increment(product.id)">+</button>
            <span v-if="product.quantity && product.quantity <= product.count">Max stock reached</span>
          </div>
          <button :disabled="!product.count || product.count === 0" 
                  @click="addToBasket(product)">
          Add to Basket
          </button>
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
        count: 1
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
      },
      increment (id) {
        this.$store.commit('INCREMENT_PRODUCT_COUNT', {id})
      },
      decrement (id) {
        this.$store.commit('DECREMENT_PRODUCT_COUNT', {id})
      },
      addToBasket (product) {
        this.$store.commit('ADD_TO_BASKET', product)
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      img {
          width: 120px;
          height: 100px;
          margin: 5px;
          align-items: center;
      }
      button:disabled {
        opacity: 0.5;
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