<template>
    <main class="home-page main-grid">
      <h1>Es Bookstore</h1>
      <h3 style="font-style: italic;">Read, experience, inspire.</h3>

      <!--<input type="text" 
            @input="handleSearch"
            v-model="search"
            placeholder="search product..." />-->
      <br/>
      <br/>

      <ul>
        <li v-for="(collection, index) in collections" :key="index">
          <select @change="handleCollection">
            <option value="" selected disabled>Select collection</option>
            <option v-for="item in collection" :key="item">{{ item }}</option>
          </select>
        </li>
      </ul>

          <br/>
          <!--<div>
            <button @click="decrement(product.id)">-</button>
            <span>{{ product.count || 0 }}</span>
            <button :disabled="product.quantity && product.quantity <= product.count" 
                    @click="increment(product.id)">+</button>
            <span v-if="product.quantity && product.quantity <= product.count">Max stock reached</span>
          </div>
          <button :disabled="!product.count || product.count === 0" 
                  @click="addToBasket(product)">
          Add to Basket
          </button>-->
    </main>
</template>
  
<script>
export default {
  name: "Home",
    data () {
      return {
      }
    },
  computed: {
    collections () {
      return this.$store.getters.collections
    }
  },
  methods: {
    handleCollection (ev) {
      this.$router.push(`/collection/${ev.target.value}`)
    }
   // handleSearch() {
     //   this.$store.commit('SEARCH_PRODUCTS', this.search)
    //},
    //increment (id) {
        //this.$store.commit('INCREMENT_PRODUCT_COUNT', {id})
   // },
   // decrement (id) {
     //   this.$store.commit('DECREMENT_PRODUCT_COUNT', {id})
    //},
    //addToBasket (product) {
        //this.$store.commit('ADD_TO_BASKET', product)
    //}
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
      select {
        border: none;
        border-radius: 5px;
        background-color: lightblue;
        font-size: 18px;
      }
        ul, li {
        list-style-type: none;
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
      span, button {
        margin: 3px; 
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