<template>
  <section>
    <div id="item-container">
      <div class="gallery">
        <img id="item-main-image" :src="mainItem.image">
        <div class="thumbnails">
          <img v-for="(image, index) in mainItem.thumbnails" :src="image" :key="index"
               @click="changeThumbnail(index)">
        </div>
      </div>
      <h1>{{mainItem.title}} - {{mainItem.price}}$</h1>
      <AddToCart :index="this.id"/>
      <Comments/>
    </div>

    <div class="suggested-container">
      <h3>Total: <span id="total-price">{{total | round}}</span>$</h3>
      <h3>Similar items</h3>
      <ul>
        <li v-for="(item, index) in suggested" :key="index">
          <div>
            <img :src="item.image">
            <h4>
              <router-link :to="{ name: 'items', params: { id:  index }}">
                {{item.title}} - {{item.price}}$
              </router-link>
            </h4>
            <AddToCart :index="index"/>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import AddToCart from './AddToCart'
import Comments from './Comments'

export default {
  name: 'ItemPage',
  components: {
    AddToCart,
    Comments
  },
  computed: {
    id: function () {
      return this.$route.params.id
    },
    mainItem: function () {
      return this.$store.getters.getItem(this.id)
    },
    suggested: function () {
      let results = {};
      for (let i in this.$store.state.items) {
        if (i != this.id) {
          results[i] = this.$store.state.items[i]
        }
      }
      console.log(results)
      return results
    },
    total: function () {
      return this.$store.state.cart.total
    }
  },
  methods: {
    changeThumbnail: function (index) {
      this.mainItem.image = this.mainItem.thumbnails[index]
    }
  },
  filters: {
    round: function (value) {
      if (!value) {
        return 0;
      }

      return Number.parseFloat(value).toFixed(2)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

section {
  display: flex;
  width: 80%;
  margin: 30px auto;
}

section div#item-container {
  flex-grow: 10;
}

section div.suggested-container {
  flex-grow: 2;
}

#item-main-image {
  height: 400px;
}

#item-container h1 {
  margin: 15px 15px;
}

#item-container .gallery {
  text-align: center;
}

#item-container .thumbnails img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: top center;
  float: left;
  margin-right: 20px;
  cursor: pointer
}

#item-container .thumbnails img:hover {
  cursor: pointer;
  opacity: .7;
}

#item-container .thumbnails::after {
  display: block;
  content: "";
  clear: both;
}

.suggested-container h3 {
  margin: 15px;
  padding: 15px;
  color: #ffffff;
  background-color: #455a64;
}

.suggested-container ul {
  margin: 15px;
  padding: 0;
}

.suggested-container ul li {
  list-style: none;
}

.suggested-container ul li div {
  margin: 20px 0;
}

.suggested-container ul li img {
  width: 20%;
  height: 150px;
  object-fit: cover;
  object-position: top center;
  float: left;
  margin-right: 20px;
}

.suggested-container ul li div::after {
  content: "";
  display: block;
  clear: both;
}

.suggested-container ul li h4 {
  margin-top: 0;
  margin-bottom: 10px;
}

.suggested-container ul li h4 a {
  color: #1a1a1a;
  text-decoration: none;
}

.suggested-container ul li h4 a:hover {
  color: #ff5f52;
  text-decoration: underline;
}

.suggested-container ul li small {
  color: #bcbcbc;
}

footer {
  color: #cccccc;
  text-align: center;
}

.comment-contents {
  margin: 30px 0;
}

.comment-contents .comment {
  padding: 15px;
  background-color: #9ED0DB;
  border-radius: 20px;
  margin: 10px 0;
}

.comment-contents .comment .commented-at {
  font-size: 10px;
  color: #ffffff;
}

.comment-box {
  margin-top: 30px;
}

.comment-box textarea {
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  padding: 10px;
  font-size: 12px;
  border: 1px dashed #000000;
  resize: none;
}

@media screen and (max-width: 768px) {
  section {
    flex-direction: column;
  }
}
</style>