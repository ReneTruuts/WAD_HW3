<template>
  <header>
    <nav>
      <div class="logo-container">
        <router-link to="/">
          <img src="../assets/logo.png" alt="Booker">
        </router-link>
      </div>
      <div class="cart-container">
        <img src="../assets/cart.png" alt="Cart">
        <span>{{cart.selected.length}}</span>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    cart: function () {
      return this.$store.state.cart
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}
header:hover {
  box-shadow: 0 -20px 30px #4d4d4d;
}
nav {
  display: flex;
  background-color: #ffffff;
  align-items: center;
}
nav div {
  height: 70px;
  flex-grow: 4;
  padding: 10px 30px;
}
nav div.logo-container img {
  height: 100%;
}
nav div.cart-container {
  text-align: right;
}
nav div.cart-container img {
  height: 50px;
  margin-top: 10px;
}
nav div.cart-container span {
  position: absolute;
  display: block;
  z-index: 1;
  width: 25px;
  height: 25px;
  background-color: #ff5c18;
  right: 15px;
  top: 14px;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  line-height: 25px;
  border-radius: 100%;
}
</style>
