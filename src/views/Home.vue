<template>
    <main class="home-page main-grid">
      <h2>New books</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          <router-link :to="`/product/${product.id}`">
            <img class="product-img" :src="product.img" alt="book cover" />
            <br/>
            {{ product.name }}
          </router-link>
          <br/>
          {{ product.price }} Lei
        </li>
      </ul>
      <h2>Coming next month</h2>
      <div class="flex-div">
        <div>
          <h3>Midnight Sun</h3>
          <p>by Stephenie Meyer</p>
          <p>Don't miss the companion book to the Twilight series. You will get the chance to see the story through the vampire's point of view.</p>
        </div>
        <div>
          <img class="next-month" src="../assets/books/midnight_sun.jpg" alt="book cover" />
        </div>
      </div>
    </main>
</template>
  
<script>
export default {
  name: "Home", 
    data () {
      return {
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
  }
}
</script>
  
<style lang="scss">
  .home-page {
    @media only screen and (min-width: 0) {
      height: 100%;
      margin-bottom: 24px;

      h2 {
        font-size: 24px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-style: normal;
        text-align: center;
      }
      ul, li {
        list-style-type: none;
      }
      ul {
        margin: 0 30px;
        padding: 0 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }
      li {
        margin: 10px;
        border: none;
      }
      .product-img {
        width: 120px;
        height: 150px;
        border-radius: 5px;
      }
      a {
        text-decoration: none;
        font-size: 18px;
        font-style: normal;
        color: rgb(218, 30, 93);
        font-family: Arial, Helvetica, sans-serif;
      }
      a:hover {
        text-decoration: underline;
      }
      .flex-div {
        display: flex;
        margin: 0 20px;

        h3 {
          margin: 0 30px;
          color: rgb(218, 30, 93);
          font-size: 21px;
          font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
          font-style: normal;
          text-align: left;
        }
        p {
          margin: 0 30px;
          font-size: 17px; 
          font-family: Arial, Helvetica, sans-serif; 
          text-align: justify; 
          line-height: 2;
        }
        .next-month {
          margin-top: 30px;
          width: 130px;
          height: 170px;
          border-radius: 5px;
        }
      }
    }

    @media only screen and (min-width: 1024px) {
      h2 {
        font-size: 33px;
      }
      ul {
        margin: 0 120px;
        padding: 0 60px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      li {
        margin: 0 10px;
        border: none;
      }
      .product-img {
        width: 130px;
        height: 170px;
        margin-bottom: 10px;
      }
      a {
        font-size: 18px;
      }
      .flex-div {
        display: flex;
        margin: 0 350px;

        h3 {
          font-size: 24px;
          margin: 0 15px;
        }
        p {
          font-size: 18px;
          margin: 0 15px;
        }
        .next-month {
          margin-top: 0;
          margin: 0 5px;
        }
      }
    }
  } 
</style>