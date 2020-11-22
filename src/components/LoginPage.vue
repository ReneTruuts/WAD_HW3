<template>
  <section class="login-page">
    <section id="login-container">
      <div>
        <img src="../assets/postitLogo.png" id="postitpic">
       <h1 id="heading1">Welcome to postIt!</h1>
      </div>
      <div>
        <h4>
          <a href="#">Create an Account</a>
        </h4>
      </div>
      <div>
        <h4>Or</h4>
      </div>
      <div>
        <h3>Please Log In</h3>
        <form action="index.html" method="post">
          <div>
            <input type="text" name="email" placeholder="Email">
          </div>
          <div>
            <input type="password" name="password" placeholder="Password">
          </div>
          <div>

            <button @click="$router.push('IndexPage')">Log In</button>

          </div>
          <div>
            <small>
              <a href="#">Forgot password?</a>
            </small>
          </div>
        </form>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  computed: {
    items: function () {
      return this.$store.state.items
    }
  }
}
</script>

<style scoped>
* {
  font-family: Tahoma;
  outline: none;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
body {
  background-color: darkblue;
  color: #263238;
}
.login-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#login-container {
  background-size: 20% auto;
  background-repeat: no-repeat;
  background-position: 15px 15px;
  min-width: 25%;
  padding: 45px 45px;
  background-color: #ffffff;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  text-align: center;
}
#login-container form div > input {
  padding: 8px 16px;
  margin: 4px 0;
}
button {
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  background-color: #0277bd;
  border: none;
  border-radius: 4px;
}
button:hover {
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
}
#postitpic {
  width: 15%;

}
</style>