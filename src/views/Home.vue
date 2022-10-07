<template>
    <main class="home-page main-grid">
      <section class="intro">
        <h1>Welcome to Es Bookstore</h1>
        <p>Read, experience, inspire.</p>
        <input type="text" 
              v-model="search" 
              @input="handleSearch" 
              placeholder="search product..." />
      </section>
      <section class="mitro">
        <ul>
          <li v-for="product in products" :key="product.id">
            <router-link :to="`/product/${product.id}`">
              {{ product.name }}
            </router-link>
            <div>
              <button class="quantity-btn" @click="decrement(product.id)">-</button>
              <span>{{ product.count || 0 }}</span>
              <button class="quantity-btn" :disabled="product.quantity && (product.quantity <= product.count)" 
                      @click="increment(product.id)">+</button>
              <span v-if="product.quantity && (product.quantity <= product.count)">Max stock reached</span>
            </div>
            <button class="basket-btn" :disabled="!product.count || product.count === 0" 
                    @click="addToBasket(product)">
              Add to Basket
            </button>
          </li>
        </ul>
      </section>
      <section class="outro">
        <h3>A variety of genres for every taste</h3>
        <ul>
          <li class="pale-pink" v-for="genre in genres">
            <router-link :to="`/genre/${genre.id}`">{{ genre.name }}</router-link>
          </li>
        </ul>
        <br/>
        <h3>Collections on display</h3>
        <ul>
          <li class="cadet-blue" v-for="(collection, index) in collections" :key="index">
            <select @change="handleCollection">
              <option value="" selected disabled>Select collection</option>
              <option v-for="item in collection" :key="item">{{ item }}</option>
            </select>
          </li>
        </ul>
        <br/>
        <h3>Authors on display</h3>
        <ul>
          <li class="author" v-for="author in authors">
            <router-link :to="`/authors/${author.id}`">{{ author.name }}</router-link>
          </li>
        </ul>
      </section>
    </main>
</template>
  
<script>
export default {
  name: "Home",
    data () {
      return {
//        search: '',
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
      
    }
    @media only screen and (min-width: 1024px) {
      height: 100%;
      
      .intro {
        h1 {
          margin: 70px 0 20px 80px;
          font-size: 45px;
          font-style: normal;
          text-align: left;
        }
        p {
          margin: 0 0 20px 100px;
          font-size: 36px;
          font-style: italic; 
          text-align: left;
        }
        input {
          margin: 0 0 20px 90px;
          display: flex;
          align-items: left;
        }
      }

      .mitro {
        ul, li {
          list-style-type: none;
        }
        ul {
          margin: 0 60px;
          width: 88%;
          max-width: 420px;
        }
        li {
          height: 100px;
          margin-bottom: 24px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          border: 1px solid black;
          border-radius: 4px;
          background-color: white;
          font-style: normal;
          font-size: 17px;
        }
        span {
          margin: 0 8px;
        }
        .quantity-btn {
          border: none;
          border-radius: 4px;
          font-size: 15px;
          background: linear-gradient(mediumseagreen, green);
          color: white;
        }
        .quantity-btn:hover {
          background: linear-gradient(green, mediumseagreen)
        }
      }

      .outro {
        li.pale-pink {
          height: 30px;
          margin-bottom: 10px;
          border-radius: 4px;
          font-size: 18px;
          border: 1px solid rgb(148, 19, 62);
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          a {
            text-decoration: none;
            color: rgb(231, 64, 119);
          }
          a:hover {
            text-decoration: underline;
          }
        }
        select {
          border: none;
          border-radius: 5px;
          background-color: rgb(166, 229, 250);
          font-size: 18px;
          option {
            background-color: white;
          }
        }
        li.cadet-blue {
          height: 80px;
          margin-bottom: 24px;
          border-radius: 4px;
          font-size: 20px;
          background-color: rgb(166, 229, 250);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        li.author {
          height: 40px;
          margin-bottom: 24px;
          border-radius: 5px;
          font-size: 18px;
          border: 1px solid rgb(106, 115, 186);
          background-color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          a {
            text-decoration: none;
            color: rgb(34, 115, 222);
          }
          a:hover {
            text-decoration: underline;
            color: red;
          }
        }
      }
    }
  }
</style>