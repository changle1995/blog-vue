<template>
  <div>
    <!--头部-->
    <blog-header/>
    <!--中间部分-->
    <div class="container">
      <!--板块导航列表-->
      <blog-plate-nav/>
      <!--轮播图-->
      <div class="rounded">
        <div id="hotArticles" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li v-for="(item, index) in carousel"
                :key="index"
                data-target="#hotArticles"
                :data-slide-to="index"
                :class="{active: index === 0}"></li>
          </ol>
          <div class="carousel-inner" style="height: 30rem;">
            <router-link v-for="(item, index) in carousel"
                         :key="index"
                         :to="item.to"
                         tag="div"
                         class="carousel-item"
                         :class="{active: index === 0}">
              <img class="d-block w-100 m-auto"
                   :src="item.src"
                   style="cursor: pointer">
              <div class="carousel-caption d-none d-md-block text-secondary">
                <h5>{{item.title}}</h5>
                <p>{{item.description}}</p>
              </div>
            </router-link>
          </div>
          <a class="carousel-control-prev" href="#hotArticles" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#hotArticles" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
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
        carousel: [
          {
            src: '/static/lcw.jpg',
            to: {name: '板块', params: {id: 1}},
            alt: '第一张图',
            title: '第一张图',
            description: '第一张图'
          },
          {
            src: '/static/zxxz.jpg',
            to: {name: '板块', params: {id: 1}},
            alt: '第二张图',
            title: '第二张图',
            description: '第二张图'
          },
          {
            src: '/static/logo.png',
            to: {name: '板块', params: {id: 1}},
            alt: '第三张图',
            title: '第三张图',
            description: '第三张图'
          }
        ],
        articles: null
      }
    },
    methods: {
      init() {
        articleApi.get()
          .then(data => {
            this.articles = data
          })
          .catch(error => {
            this.$message(utils.createElementMessage(error, 'error'))
          })
      }
    },
    created() {
      this.init()
    }
  }
</script>
