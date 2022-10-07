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
      q {
        font-size: 17.5px;
      }
      h3 {
        display: flex;
        justify-content: center;
      }
      ul, li {
        list-style-type: none;
      }
      ul {
        width: 50%;
        margin: 0 auto;
      }
      img {
        margin: 8px;
        width: 450px;
        height: 420px;
        border-radius: 5px;
      }
      li.pale-pink {
        height: 40px;
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
          }
        }
      }
    }

    @media only screen and (min-width: 1024px) {
      q {
        font-size: 18px;
      }
      h3 {
        justify-content: center;
      }
      ul, li {
        list-style-type: none;
      }
      ul {
        width: 20%;
        margin: 0 auto;
      }
        img {
          margin-top: 15px;
          margin-right: 38px;
          width: 680px;
          height: 540px;
          border-radius: 5px;
        }
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
</style>