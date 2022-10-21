<template>
    <main class="home-page main-grid">
      <br/>
      <ul class="container-products">
        <li class="item-products" v-for="product in products" :key="product.id">
          <router-link :to="`/product/${product.id}`">
            <img class="product-img" :src="product.img" alt="book cover" />
            <br/>
            {{ product.name }}
          </router-link>
          <br/>
          <div>
            <button class="quantity-button" @click="decrement(product.id)">-</button>
            <span>{{ product.count || 0 }}</span>
            <button class="quantity-button" :disabled="product.quantity && (product.quantity <= product.count)" 
                  @click="increment(product.id)">+</button>
            <br/>
            <span v-if="product.quantity && (product.quantity <= product.count)">Max stock reached</span>
          </div>
          <button class="basket-button" :disabled="!product.count || product.count === 0" 
                @click="addToBasket(product)">
            Add to Basket
          </button>
        </li>
      </ul>
      <br/>
      <!--<h3>Collections on display</h3>
      <ul class="container-collections">
        <li class="item-collections" v-for="(collection, index) in collections" :key="index">
          <select @change="handleCollection">
            <option value="" selected disabled>Select collection</option>
            <option v-for="item in collection" :key="item">{{ item }}</option>
          </select>
        </li>
      </ul>
      <br/>
      <h3>Discover your favorite authors</h3>
      <ul class="container-authors">
        <li class="item-authors" v-for="author in authors">
          <router-link :to="`/authors/${author.id}`">
            <img class="author-img" :src="author.img" alt="author photo" />
            <br/>
            {{ author.name }}
          </router-link>
        </li>
      </ul>
      <br/>
      <h3>A variety of genres for every taste</h3>
      <ul class="container-genres">    
        <li class="item-genres" v-for="genre in genres">
          <router-link :to="`/genre/${genre.id}`">
            {{ genre.name }}
          </router-link>
        </li>
      </ul>-->
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
      margin-bottom: 24px;

      h1 {
        font-size: 36px;
        font-style: normal;
        text-align: center;
        font-family: Verdana, Tahoma, sans-serif;
      }
      q {
        font-size: 18px;
        font-style: italic;
        text-align: center;
        quotes: none;
        font-family: Arial, Helvetica, sans-serif;
      }
      input {
        margin: 24px 0 5px 0;
        border: 1px solid grey;
        border-radius: 4px;
        font-size: 15px;
      }
      ul, li {
        list-style-type: none;
      }
      .container-products {
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;   
      }
      .item-products {
        margin: 10px;
        padding: 10px 15px 10px 15px;
        border: 1px solid rgb(4, 222, 222);
        border-radius: 5px;
        background-color: lightcyan;
      }
      .product-img {
        width: 140px;
        height: 180px;
        margin-bottom: 10px;
        border-radius: 5px;
      }
      .quantity-button {
        margin: 10px 5px;
        padding: 3px 7px;
        border: none;
        border-radius: 4px;
        background-color: rgb(228, 83, 131);
        color: white;
        font-size: 15px;
      }
      .quantity-button:hover {
        background-color: rgb(218, 30, 93);
      }
      span {
        margin: 5px;
        font-size: 17px;
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
      /*h3 {
        font-size: 23px;
        font-style: normal;
        text-align: center;
        font-family: Verdana, Tahoma, sans-serif;
      }
      .container-collections {
        margin: 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;   
      }
      .item-collections {
        margin: 10px;
        padding: 20px;
        border: 1px solid rgb(4, 222, 222);
        border-radius: 4px;
       background-color: lightcyan;
      }
      select {
        border: none;
        background-color: lightcyan;
        color: black;
        font-size: 18px;
        font-style: normal;
      }
      option {
        background-color: white;
        color: rgb(218, 30, 93);
        font-size: 18px;
        font-style: normal;
      }
      .container-authors {
        padding: 5px 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;   
      }
      .item-authors {
        margin: 10px;
        padding: 5px 10px 10px 10px;
        border: 1px solid rgb(4, 222, 222);
        border-radius: 5px;
        background-color: lightcyan;
      }
      .author-img {
        width: 130px;
        height: 160px;
        margin-bottom: 10px;
        border-radius: 5px;
      }
      .container-genres {
        padding: 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;   
      }
      .item-genres {
        margin: 15px;
        padding: 5px 10px 10px 10px;
        border: 1px solid rgb(4, 222, 222);
        border-radius: 5px;
        background-color: lightcyan;
      }*/
    }

    @media only screen and (min-width: 1024px) {
      h1 {
        font-size: 40px;
      }
      q {
        font-size: 21px;
        quotes: none;
      }
      input {
        margin: 24px 0 5px 0;
        font-size: 16px;
      }
      ul, li {
        list-style-type: none;
      }
      .container-products {
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;   
      }
      .item-products {
        margin: 15px 35px;
        padding: 10px 20px 10px 20px;
      }
      .product-img {
        width: 180px;
        height: 220px;
        margin-bottom: 10px;
      }
      .quantity-button {
        margin: 10px;
        padding: 3px 8px;
        font-size: 17px;
      }
      .quantity-button:hover {
        background-color: rgb(218, 30, 93);
      }
      span {
        margin: 5px;
        font-size: 18px;
      }
      .basket-button:disabled {
        margin: 7px;
        font-size: 16px;
      }
      .basket-button:enabled {
        margin: 7px;
        font-size: 19px;
      }
      h3 {
        font-size: 27px;
      }
      /*.container-collections {
        margin: 10px;
      }
      .item-collections {
        margin: 10px;
        padding: 20px;
      }
      select {
        font-size: 19px;
      }
      option {
        font-size: 18px;
      }
      .container-authors {
        padding: 5px 40px;
      }
      .item-authors {
        margin: 10px;
        padding: 10px 15px 10px 15px;
      }
      .author-img {
        width: 150px;
        height: 200px;
        margin-bottom: 10px;
        border-radius: 5px;
      }*/
      a {
        font-size: 18px;
      }
    }
  }
</style>