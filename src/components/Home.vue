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

<style scoped>

</style>