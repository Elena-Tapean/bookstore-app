<template>
    <main class="home-page main-grid">
      <div class="shader-bg">
      <h3>New books</h3>
      <ul>
        <li v-for="product in products" :key="product.id">
          <router-link :to="`/product/${product.id}`">
            <img class="product-img" :src="product.img" alt="book cover" />
            <br/>
            {{ product.name }}
          </router-link>
          <br/>
          <span>{{ product.price }} Lei</span>
        </li>
      </ul>
      <br/>
      <h3>Coming next month</h3>
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
      <h3>Card Games</h3>
      <div class="flex2-div">
        <div>
          <router-link style="color: rgb(218, 30, 93);" to="/game">
            Pick One Card
          </router-link>
        </div>
        <div>
          <router-link style="color: rgb(218, 30, 93);" to="/game">
            Pick Your Favorite Author
          </router-link>
        </div>
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
      background-image: url('../assets/home.jpg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      .shader-bg {
        margin: 15px 25px;
        padding: 3px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 5px;
      }
      ul, li {
        list-style-type: none;
      }
      ul {
        margin: 0 5px;
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
      p {
        margin: 0 30px;
        margin-bottom: 10px;
        font-size: 17px;
        color: black; 
        font-family: Arial, Helvetica, sans-serif; 
        text-align: justify; 
        line-height: 1.5;
      }
      span {
        color: black;
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
      h3 {
        color: black;
        font-size: 24px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-style: normal;
        text-align: center;
      }
      .flex2-div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 20px;
        div {
          margin: 5px;
        }
      }
      .flex-div {
        display: flex;
        margin: 0 20px;

        h3 {
          margin: 0 30px;
          color: rgb(52, 52, 52);
          font-size: 21px;
          font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
          font-style: normal;
          text-align: left;
        }
        p {
          margin: 0 30px;
          margin-bottom: 24px;
          font-size: 17px;
          color: black; 
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
        .flip-card {
          display: none;
        }
      }
    }

    @media only screen and (min-width: 1024px) {
      .shader-bg {
        margin: 15px 180px;
        padding: 10px 20px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 5px;
      }
      h2 {
        font-size: 30px;
      }
      ul {
        margin: 0 10px;
        padding: 0 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      li {
        margin: 5px;
        border: none;
      }
      .product-img {
        width: 130px;
        height: 170px;
        margin-bottom: 10px;
      }
      p {
        margin: 0 auto;
        margin-bottom: 10px;
        font-size: 18px; 
        line-height: 2;
      }
      span {
        margin: 5px;
      }
      a {
        font-size: 18px;
      }
      .flex2-div {
        margin-bottom: 30px;
        div {
          margin: 5px;
        }
      }
      .flex-div {
        display: flex;
        margin: 0 200px;
        margin-bottom: 30px;

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