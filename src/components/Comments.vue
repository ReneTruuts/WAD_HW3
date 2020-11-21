<template>
    <div>
        <div class="comment-contents">
            <div class="comment" v-for="(comment, index) in sortedComments" :key="index">
                <div class="commented-at">{{comment.createDate | formatDate}}</div>
                {{comment.text}}
            </div>
        </div>
        <div class="comment-box">
            <textarea rows="10" v-model="commentField" placeholder="Leave a Comment..." @keyup.enter="addComment"></textarea>
        </div>
    </div>
</template>

<script>
    import Comment from '../models/Comment'

    export default {
        name: 'Comments',
        methods: {
          addComment: function() {
              this.comments.push(new Comment(this.commentField, new Date()))
              this.commentField = null
          }
        },
        data: function () {
            return {
                commentField: null,
                comments: []
            }
        },
        computed: {
          sortedComments: function() {
              let comments = this.comments

              comments.sort((a, b) => (a.createDate < b.createDate) ? 1 : -1)

              return comments
          }
        },
        filters: {
            formatDate: function (value) {
                if (!value) return ''

                let date = new Date(value);

                return date.getFullYear() + "-"
                    + date.getMonth() + "-"
                    + date.getDate() + " "
                    + date.getHours() + ":"
                    + date.getMinutes() + ":"
                    + date.getSeconds()

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
    .comment-contents .comment .commented-at{
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
