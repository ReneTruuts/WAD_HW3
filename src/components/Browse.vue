<template>
  <div class="posts">
    <Header />
    <section class="main-container">
      <div class="personArea">
        <h1> Browse users </h1>
        <ul v-for="(item, index) in people" :key="index">
          <div class="profile">
            <img :src="item.avatar" id="picture" />
            <h1>{{ item.firstname }} {{ item.lastname }}</h1>
            <Follow/>
          </div>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Follow from "@/components/Follow";
export default {
  name: "Browse",
  components: {
    Header,
    Follow
  },
  computed: {
    people() {
      return this.$store.state.people
    }
  },
  mounted() {
    this.$store.dispatch("getPeople");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}
.personArea {
  align-content: center;
}
ul {
  list-style-type: none; 
  padding: 0; 
  margin: 0; 
}

.profile {
  margin: 5%;
  padding: 10%;
  text-align: center;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5%;
}
#picture {
  object-fit: cover;
  object-position: center top;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  padding: 10px;
}

h1 {
  text-align: center;
  text-shadow: 1px 1px 2px #0277bd ;
}
</style>
