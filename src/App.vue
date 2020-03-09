<template>
  <div id="app">
    <navigation/>
    <lander/>
    <portfolio/>
  </div>
</template>

<script>
import Navigation from './components/includes/Navigation.vue'
import Lander from './components/Lander.vue'
import Portfolio from './components/Portfolio.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Lander,
    Portfolio
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
