<template>
  <div id="app">
    <NavBar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';
  export default {
    name: 'App',
    components: { 
      NavBar,
      Footer 
    }
  }
</script>

<style lang="scss">
#app {
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  main {
    flex: 1 0 auto;
  }
}
</style>
