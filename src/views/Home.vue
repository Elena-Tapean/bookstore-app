<template>
    <main class="home-page main-grid">
      <h1>Welcome to Es Bookstore</h1>
      <h3 style="font-style: italic;">Read, experience, inspire.</h3>
      <ul>
        <li v-for="(collection, index) in collections" :key="index">
          <select @change="handleCollection">
            <option value="" selected disabled>Select collection</option>
            <option v-for="item in collection" :key="item">{{ item }}</option>
          </select>
        </li>
      </ul>
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
  }
}
</script>
  
<style lang="scss">
  .home-page {
    @media only screen and (min-width: 0) {
      height: 100%;
      
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
        width: 50%;
        max-width: 320px;
        margin: 0 auto;
      }
      li {
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