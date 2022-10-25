<template>
    <main class="game-page main-grid">
        <router-link class="go-back" to="/"> 
           Go Back
        </router-link>
        <div class="shader-bg">
            <h2>Pick One Card</h2>
            <p>Let's see what book you should read next! If you have read the selected book, try another card.</p>
            <ul>
                <li v-for="product in products" :key="product.id">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img class="product-img" src="../assets/game2.jpg" alt="read me" />
                            </div>
                            <div class="flip-card-back">
                                <router-link :to="`/product/${product.id}`">
                                    <img class="product-img" :src="product.img" alt="book cover" />
                                </router-link>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <br/>
            <h2>Pick Your Favorite Author</h2>
            <p>Want to know a little bit about the authors of this October collection? Try this card game.</p>
            <ul>
                <li v-for="author in authors" :key="author.id">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img class="product-img" src="../assets/game3.jpg" alt="read me" />
                            </div>
                            <div class="flip-card-back">
                                <router-link :to="`/authors/${author.id}`">
                                    <img class="product-img" :src="author.img" alt="author photo" />
                                </router-link>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
export default {
    name: "Game",
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
    },
    authors () {
        return this.$store.state.authors
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.game-page {
    @media only screen and (min-width: 0) {
        height: 100%;
        background-image: url('../assets/home.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        .go-back {
            margin: 20px;
            display: flex;
            font-size: 18px;
            font-style: italic;
            color: rgb(218, 30, 93);
            text-decoration: none;
        }
        .shader-bg {
            margin: 15px 25px;
            padding: 15px 10px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 5px;
        }
        ul, li {
            list-style-type: none;
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        li {
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
        a {
            display: flex;
            margin: 0 auto;
            color: white;
        }
        .flip-card {
            background-color: transparent;
            width: 120px;
            height: 150px;
            perspective: 1000px;
        }
        .flip-card-inner {
            position: relative;
            margin: 8px auto;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.8);
        }
        .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
        }
        .flip-card-front {
            background: linear-gradient(rgb(228, 83, 131), rgb(218, 30, 93));
            color: white;
            border-radius: 5px;
        }
        .flip-card-back {
            background-color: rgb(228, 83, 131);
            color: white;
            border-radius: 5px;
            transform: rotateY(180deg);
        }
    }

    @media only screen and (min-width: 1024px) {
        .go-back {
            margin: 20px;
            display: flex;
            font-size: 18px;
            font-style: italic;
            color: rgb(218, 30, 93);
            text-decoration: none;
        }
        .shader-bg {
            margin: 25px 200px;
            padding: 15px 20px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 5px;
        }
        .flip-card {
            background-color: transparent;
            width: 130px;
            height: 170px;
            perspective: 1000px;
        }
        p {
            display: flex;
            justify-content: center;
            font-size: 18px; 
            line-height: 2;
        }
        .game-paraf {
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
            font-size: 18px; 
            line-height: 2;
        }
        a {
            font-size: 18px;
        }
        h2 {
            font-size: 30px;
        }
        ul {
            margin: 0 250px;
            padding: 0 10px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
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
    }
}
</style>