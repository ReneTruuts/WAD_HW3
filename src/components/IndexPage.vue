<template>
  <div class="list">
    <Header goNext="Browse" />
    <section class="main-container">
      <ul v-for="(item, index) in posts" :key="index">
        <div class="post">
          <div id="postheader">
            <img :src="item.author.avatar" id="postavatar" />
            <h3 id="author">
              {{ item.author.firstname }} {{ item.author.lastname }}
            </h3>
            <h5 id="time">{{ item.createTime|Date }}</h5>
          </div>
          <div v-if="item.media != null">
            <div v-if="item.media.type == 'image'">
              <img :src="item.media.url" id="postmedia" />
            </div>
            <div v-else>
              <video controls>
                <source :src="item.media.url" type="video/mp4" id=""/>
              </video>
            </div>
          </div>
          <div v-if="item.text != null">
            <h3>{{ item.text }}</h3>
          </div>
          <Like/>
        </div>
      </ul>
    </section>
  </div>
</template>
<script>


import Header from "@/components/Header";
import Like from "@/components/Like";

export default {
  name: "Index",
  components: {
    Header,
    Like
  },
  computed: {
    posts: function () {
      return this.$store.state.posts;
    },
  },
  filters: {
    Date: function (value) {
      let date = new Date(value);
      let month= date.getMonth()+1;
      return date.getFullYear() + "."
          + 0+month + "."
          + date.getDate() + " "
          + date.getHours() + "."
          + date.getMinutes()
    }
  },
  mounted() {
    this.$store.dispatch("getPosts");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: Tahoma;
}
.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}
ul > div {
  width: 90%;
  margin: 15px;
  padding: 3%;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5%;
}
#postmedia {
  width: 100%;
}
video {
  width: 100%;
}
#postheader {
  display: inline-block;
}

#author {
  display: inline-block;
  padding-left: 5%;
}
#time {
  float: left;
}

#menu > form {
  display: block;
  float: left;
  margin: 0;
  padding: 0;
}
#menu > form > ul > li {
  margin: 0;
  list-style-type: none;
  width: 100%;
  padding: 5px;
  border-top: 1px solid grey;
  float: left;
}

.personArea > div {
  margin: 5%;
  padding: 5%;
  text-align: center;
  border-radius: 5%;
}
#postavatar {
  object-fit: cover;
  object-position: center top;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  padding: 100px;
}
</style>
