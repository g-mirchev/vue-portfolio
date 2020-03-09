<template>
  <div id="app">
    <navigation/>
    <lander/>
  </div>
</template>

<script>
import Navigation from './components/includes/Navigation.vue'
import Lander from './components/Lander.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Lander
  }
}
</script>

<style>
#app {
}
</style>
