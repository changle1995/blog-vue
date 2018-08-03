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
            <blog-plate-navigation/>
          </div>
          <!--文章列表-->
          <div class="mb-3" v-for="(article, index) in articles" :key="index">
            <blog-article-card :article="article"/>
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
  import BlogHeader from '../modules/blog/components/BlogHeader'
  import BlogFooter from '../modules/blog/components/BlogFooter'
  import BlogPlateNavigation from '../modules/blog/components/BlogPlateNavigation'
  import BlogArticleCard from '../modules/blog/components/BlogArticleCard'
  import {getPageableArticles} from '../modules/blog/api/article'

  export default {
    name: "home",
    components: {
      BlogHeader,
      BlogFooter,
      BlogPlateNavigation,
      BlogArticleCard
    },
    data() {
      return {
        articles: null
      }
    },
    methods: {
      init() {
        getPageableArticles()
          .then(data => {
            this.articles = data.content
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    created() {
      this.init()
    }
  }
</script>
