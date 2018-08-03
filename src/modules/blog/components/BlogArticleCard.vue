<template>
  <div class="card">
    <div class="card-body">
      <p class="card-text text-muted">热门内容, 来自：{{article.plate.name}}</p>
      <div class="mb-2">
        <img height="30px" width="30px" :src="article.user.avatar" style="cursor: pointer">
        <span class="text-secondary" style="cursor: pointer">{{article.user.username}}</span>
      </div>
      <h4 class="card-title" style="cursor: pointer" @click="readArticle(article)">{{article.title}}</h4>
      <div class="row mb-3" style="cursor: pointer" @click="readArticle(article)">
        <div class="col-4" v-if="article.thumbnail">
          <img width="200px" height="120px" :src="article.thumbnail">
        </div>
        <div class="card-text col-8" style="max-height: 120px;">{{article.description}}</div>
      </div>
      <div>
        <a href="#">点赞</a>
        <a href="#">分享</a>
        <a href="#">收藏</a>
        <span>阅读数：{{article.viewNumber}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "blog-article-card",
    props: {
      article: {
        type: Object,
        required: true
      }
    },
    methods: {
      readArticle(article) {
        this.$router.push({name: '文章', params: {id: article.id}})
      }
    }
  }
</script>
