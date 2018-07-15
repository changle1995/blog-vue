<template>
  <div>
    <!--头部-->
    <blog-header/>
    <div class="container">
      <!--板块导航列表-->
      <blog-plate-nav/>
      <!--文章列表-->
      <div class="my-5" v-if="articles">
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
    </div>
    <!--尾部-->
    <blog-footer/>
  </div>
</template>

<script>
  import BlogHeader from '../../../components/BlogHeader'
  import BlogFooter from '../../../components/BlogFooter'
  import BlogPlateNav from '../../../components/BlogPlateNav'
  import * as articleApi from '../api/article'
  import * as utils from '../../../utils'

  export default {
    name: "blog-plate",
    components: {
      BlogHeader,
      BlogPlateNav,
      BlogFooter
    },
    data() {
      return {
        articles: null
      }
    },
    methods: {
      init() {
        articleApi.get({plateId: this.$route.params.id})
          .then(data => {
            this.articles = data
          })
          .catch(error => {
            this.$message(utils.createElementMessage(error, 'error'))
          })
      }
    },
    watch: {
      $route: 'init'
    },
    created() {
      this.init()
    }
  }
</script>
