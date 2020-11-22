<template>
  <div class="login">
    <router-link to="/LoginPage"></router-link>
    <LoginPage :index="index"/>
  </div>
</template>

<script>
import LoginPage from "./LoginPage";
export default {
  name: 'Home',
  components: {
    LoginPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>