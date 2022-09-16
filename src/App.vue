<template>
  <div id="app">
    <NavBar />
    <router-view/>
    <MainFooter />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import MainFooter from './components/MainFooter.vue';
  export default {
    name: 'App',
    components: {
      NavBar,
      MainFooter,
    },
    created () {
      this.$store.dispatch('get_data')
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
