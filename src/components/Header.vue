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
      <div class="profile-pic">
          <img :src="user.avatar" alt="postIt" @click="show = !show">
      </div>
      <div class="drop-down-container" v-show="show">
          <span id="user-name">{{user.firstname}} {{user.lastname}}</span>
          <span id="user-email">{{user.email}}</span>            
          <span class="separator"></span> 
          <span v-if=isNextBrowse><router-link to="/browse" >Browse</router-link></span>
          <span v-else><router-link to="/index" >Index</router-link></span>
          <span class="separator"></span>
          <router-link to="/"><span>Log out</span></router-link>
      </div>
    </nav>
  </header>

</template>

<script>
export default {
  name: 'Header',
  props: {
      goNext: String
  },
    data: function(){
        return{
            show: false
        }
    },
  computed: {
    isNextBrowse: function(){
        if(this.goNext == "Browse") return true
        else return false
    },
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

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

body {
  background-color: #0277bd;
  color: #263238;
}

a {
  color: #40c4ff;
}
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
#postitlogo {

}
</style>
