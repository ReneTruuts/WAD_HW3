<template>
  <header>
    <nav>
      <div class="logo-container">
        <router-link to="/">
        <img src="../assets/postitLogo.png" id="postitlogo" alt="postIt">
        </router-link>
      </div>
      <div class="search-container">
        <input type="text" name="search"><button type="button">Search</button>
      </div>
      <div class="avatar-container">
        <div class="avatar">
          <img :src="user.avatar" alt="postIt" @click="down = !down">
        </div>
        <div class="dropdown" v-show="down">
          <p id="user-name">{{user.firstname}} {{user.lastname}}</p> 
          <p id="user-email">{{user.email}}</p>
          <p class="separator"></p>
          <p>
            <router-link to="/IndexPage" > Index </router-link>
          </p>
          <p>
            <router-link to="/Browse" > Browse </router-link>
          </p>
          <span class="separator"></span>
          <p>
            <router-link to="/">Log out</router-link>
          </p>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',    
  data: function(){
    return{
      down: false
    }
  }, 
  computed: {
    user() {
        return this.$store.state.user
    }
  },
  mounted() {
    this.$store.dispatch("getUser");
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: 'Tahoma';
  outline: none;
} 

header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

nav {
  display: flex;
  background-color: #ffffff;
  align-items: center;
}

nav div {
  height: 30px;
  flex-grow: 4;
  padding: 10px;
}

nav div img {
  height: 100%;
  width: 30px;
  margin-left: 15px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top center;
}

nav div.search-container > input {
  box-sizing: border-box;
  height: 30px;
  width: 80%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
}

nav div.search-container > button {
  height: 30px;
  width: 20%;
  margin: 0;
  padding: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

nav div.avatar-container {
    margin-right: 15px;
    text-align: right;
    position: relative;
    display: inline-block;
}
.avatar {
  padding: 0px;
}
.dropdown {
    position: absolute;
    background-color: white;
    right: 0px;
    z-index: 1;
    height: initial;
    padding: 10px;
  }
button {
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  background-color: #01579b;
  border: none;
  border-radius: 4px;
}

button:hover {
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
}

</style>
