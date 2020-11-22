<template>
  <div class="list">
    <Header />
    <section class="main-container">
      <ul v-for="(item, index) in posts" :key="index">
        <div class="post">
          <div class="post-author">
            <img :src="item.author.avatar" id="postavatar">
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
    }
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
  padding: 15px 15px 15px 15px;
  background-color: #ffffff;
}
.post {
  width: 90%;
  margin: 0px;
  padding: 2%;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 2%;
}
.post-author {
  display: flex;
  background-color: #ffffff;
}

.post-author h5 {
    float: right;
    color: grey;
}

#postavatar {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

#postmedia {
  width: 100%;
}
video {
  width: 100%;
}

</style>