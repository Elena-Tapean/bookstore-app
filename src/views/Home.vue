<template>
    <main class="home-page main-grid">
      <h1>Welcome to Es Bookstore</h1>
      <q style="font-style: italic;">Read, experience, inspire.</q>
      <br/>
      <br/>
      <img src="../assets/home.jpg" alt="home logo" />
      <br/>
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
      <br/>
      <br/>
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
    },
    products () {
      return this.$store.state.products
    },
    genres () {
      return this.$store.state.genres
    },
    authors () {
      return this.$store.state.authors
    }
  },
  methods: {
    handleCollection (ev) {
      this.$router.push(`/collection/${ev.target.value}`)
    }
  }
}
</script>
  
<style lang="scss">
  .home-page {
    @media only screen and (min-width: 0) {
      height: 100%;

      img {
        width: 450px;
        height: 420px;
        border-radius: 5px;
      }
      select {
        border: none;
        border-radius: 5px;
        background-color: lightblue;
        font-size: 18px;
        option {
          background-color: white;
        }
      }
      ul, li {
        list-style-type: none;
      }
      ul {
        width: 40%;
        max-width: 120px;
        margin: 0 auto;
      }
      li.pale-pink {
        height: 50px;
        margin-bottom: 10px;
        border-radius: 4px;
        font-size: 18px;
        border: 1px solid pink;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        a {
          text-decoration: none;
          color: palevioletred;
        }
        a:hover {
          text-decoration: underline;
        }
      }
      li.cadet-blue {
        height: 150px;
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
      li.author {
        height: 50px;
        margin-bottom: 24px;
        border-radius: 5px;
        font-size: 18px;
        border: 1px solid paleturquoise;
        background-color: lightcyan;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        a {
          text-decoration: none;
          color: black;
        }
        a:hover {
          color: red;
        }
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