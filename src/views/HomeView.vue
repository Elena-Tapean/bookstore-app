<template>
    <main class="home-page main-grid">
      <h1>Home Page</h1>
      <ul>
        <li v-for="item in 6">
          <router-link :to="`/book/${item}`">
            My Book #{{ item }}
          </router-link>
        </li>
      </ul>
    </main>
  </template>
  
  <script>
    export default {
      name: "HomeView",
  }
  </script>
  
  <style lang="scss">
  .home-page {
    @media only screen and (min-width: 0) {
      height: 100%;
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