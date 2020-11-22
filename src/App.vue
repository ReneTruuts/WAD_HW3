<template>
  <div id="app">
    <router-view></router-view>
    <LoginPage :index="index"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
  },
  components: {
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