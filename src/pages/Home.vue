<template>
  <div>
    <!--头部-->
    <blog-header/>
    <!--中间部分-->
    <div class="container">
      <div class="row">
        <div class="col-9">
          <!--板块导航列表-->
          <div class="card my-2">
            <blog-plate-nav/>
          </div>
          <!--文章列表-->
          <div class="card mb-3" v-for="(article, index) in articles" :key="index">
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
        </div>
        <div class="col-3">
          <div class="card mt-2 mb-3">
            <div class="card-body">
              <h4 class="card-title">热门文章</h4>
              <ul class="card-text list-unstyled">
                <li class="text-secondary" style="cursor: pointer">asdadasd</li>
                <li class="text-secondary" style="cursor: pointer">asdadasd</li>
                <li class="text-secondary" style="cursor: pointer">asdadasd</li>
                <li class="text-secondary" style="cursor: pointer">asdadasd</li>
                <li class="text-secondary" style="cursor: pointer">asdadasd</li>
              </ul>
            </div>
          </div>
          <div class="card mt-2 mb-3">
            <div class="card-body">
              <h4 class="card-title">热门用户</h4>
              <ul class="card-text list-unstyled">
                <li class="text-secondary" style="cursor: pointer">asdadasd</li>
                <li class="text-secondary" style="cursor: pointer">asdadasd</li>
                <li class="text-secondary" style="cursor: pointer">asdadasd</li>
                <li class="text-secondary" style="cursor: pointer">asdadasd</li>
                <li class="text-secondary" style="cursor: pointer">asdadasd</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--尾部-->
    <blog-footer/>
  </div>
</template>

<script>
  import BlogHeader from '../components/BlogHeader'
  import BlogFooter from '../components/BlogFooter'
  import BlogPlateNav from '../components/BlogPlateNav'
  import * as articleApi from '../modules/blog/api/article'
  import * as utils from '../utils'

  export default {
    name: "home",
    components: {
      BlogHeader,
      BlogFooter,
      BlogPlateNav
    },
    data() {
      return {
        articles: null
      }
    },
    methods: {
      init() {
        articleApi.get()
          .then(data => {
            this.articles = data.content
          })
          .catch(error => {
            this.$message(utils.createElementMessage(error, 'error'))
          })
      },
      readArticle(article) {
        this.$router.push({name: '文章详情', params: {id: article.id}})
      }
    },
    created() {
      this.init()
    }
  }
</script>
