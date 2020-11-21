<template>
  <div id="app">
    <Header :cart="cart"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {

  name: 'app',
  methods: {

  },
  components: {
    Header,
  }
}
</script>

<style>
* {
  font-family: 'Open Sans', sans-serif;

}

html, body {
  margin: 70px 0 0 0;
  padding: 0;
  background-color: #0277bd;
}
</style>
