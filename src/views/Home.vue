<template>
    <main class="home-page main-grid">
        <h1>Welcome to Es Bookstore</h1>
        <q>Read, experience, inspire.</q>
        <br/>
        <input type="text" 
              v-model="search" 
              @input="handleSearch" 
              placeholder="search product..." />
        <ul class="container-products">
          <li class= "item-products" v-for="product in products" :key="product.id">
            <router-link :to="`/product/${product.id}`">
              <img class="product-img" :src="product.img" alt="book cover" />
              <br/>
              {{ product.name }}
            </router-link>
            <div>
              <button class="quantity-button" @click="decrement(product.id)">-</button>
              <span>{{ product.count || 0 }}</span>
              <button class="quantity-button" :disabled="product.quantity && (product.quantity <= product.count)" 
                      @click="increment(product.id)">+</button>
              <span v-if="product.quantity && (product.quantity <= product.count)">Max stock reached</span>
            </div>
            <button class="basket-button" :disabled="!product.count || product.count === 0" 
                    @click="addToBasket(product)">
              Add to Basket
            </button>
          </li>
        </ul>
        <h3>A variety of genres for every taste</h3>
        <ul class="container-genres">
          <li class="item-genres" v-for="genre in genres">
            <router-link :to="`/genre/${genre.id}`">{{ genre.name }}</router-link>
          </li>
        </ul>
        <br/>
        <h3>Collections on display</h3>
        <ul class="container-collections">
          <li class="item-collections" v-for="(collection, index) in collections" :key="index">
            <select @change="handleCollection">
              <option value="" selected disabled>Select collection</option>
              <option v-for="item in collection" :key="item">{{ item }}</option>
            </select>
          </li>
        </ul>
        <br/>
        <h3>Authors on display</h3>
        <ul class="container-authors">
          <li class="item-authors" v-for="author in authors">
            <router-link :to="`/authors/${author.id}`">{{ author.name }}</router-link>
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
    },
    collections () {
      return this.$store.getters.collections
    },
    genres () {
      return this.$store.state.genres
    },
    authors () {
      return this.$store.state.authors
    }
  },
  methods: {
    handleSearch () {
      this.$store.commit('SEARCH_PRODUCTS', this.search)
    },
    handleCollection (ev) {
      this.$router.push(`/collection/${ev.target.value}`)
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

      h1 {
        font-size: 28px;
        font-style: normal;
        text-align: center;
      }
      q {
        font-size: 21px;
        font-style: italic;
        text-align: center;
        quotes: none;
      }
      input {
        margin: 24px 0;
        border: 1px solid grey;
        border-radius: 4px;
        font-size: 15px;
      }
      ul, li {
        list-style-type: none;
      }
      .container-products {
        padding: 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;   
      }
      .item-products {
        margin: 15px;
        padding: 25px 15px 10px 15px;
        border: 1px solid rgb(4, 222, 222);
        border-radius: 4px;
        background-color: lightcyan;
      }
      .product-img {
        width: 120px;
        height: 150px;
        border-radius: 5px;
      }
      .quantity-button {
        margin: 5px;
        border: none;
        border-radius: 4px;
        background-color: rgb(228, 83, 131);
        color: white;
        font-size: 14px;
      }
      .quantity-button:hover {
        background-color: rgb(218, 30, 93)
      }
      span {
        margin: 5px;
        font-size: 16px;
        font-style: normal;
      }
      .basket-button:disabled {
        margin: 5px;
        border: 1px solid rgba(128, 128, 128, 0.8);
        border-radius: 5px;
        background-color: rgba(128, 128, 128, 1.0);
        opacity: 0.4;
        color: white;
        font-size: 14px;
        font-style: normal;
      }
      .basket-button:enabled {
        margin: 5px;
        border: 1px solid green;
        border-radius: 5px;
        background-color: mediumseagreen;
        color: white;
        font-size: 17px;
        font-style: normal;
      }
      .container-genres {
        margin: 5px;
        padding: 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .item-genres {
        margin: 5px;
        padding: 10px;
        border: 1px solid orange;
        border-radius: 4px;
      }
      a {
        text-decoration: none;
        font-size: 17px;
        font-style: normal;
        color: darkblue;
      }
      a:hover {
        text-decoration: underline;
      }
      .container-collections {
        margin: 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .item-collections {
        margin: 5px 15px 5px 15px;
        padding: 20px;
        border: none;
        border-radius: 4px;
        background-color: steelblue;
      }
      select {
        border: none;
        background-color: steelblue;
        color: white;
        font-size: 17px;
        font-style: normal;
      }
      option {
        background-color: white;
        color: steelblue;
        font-size: 18px;
        font-style: normal;
      }
      .container-authors {
        margin-bottom: 24px;
        padding: 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .item-authors {
        margin: 5px;
        padding: 5px;
        border: 1px solid purple;
        border-radius: 4px;
        font-size: 16px;
      }
    }
    @media only screen and (min-width: 1024px) {
      
    }
  }
</style>