<template>
  <div class="my-5">
    <div class="card-columns">
      <div class="card text-center bg-light"
           v-for="(article, index) in articles"
           :key="index">
        <img v-if="article.thumbnail"
             class="card-img-top"
             :src="article.thumbnail">
        <blockquote class="blockquote card-body">
          <h4 class="card-title">{{article.title}}</h4>
          <span class="card-text">{{article.description}}</span>
          <footer class="blockquote-footer text-right text-muted">
            {{article.user.username}}
          </footer>
          <p class="card-text">
            <small class="text-muted">{{article.createDate}}</small>
          </p>
          <router-link :to="{name: '文章详情', params: {id: article.id}}" class="btn btn-secondary">阅读详情</router-link>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "blog-article-card",
    props: {
      articles: {
        type: Array,
        required: true
      }
    }
  }
</script>
