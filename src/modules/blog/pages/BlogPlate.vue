<template>
  <div>
    <!--头部-->
    <blog-header/>
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
  import BlogHeader from '../components/BlogHeader'
  import BlogFooter from '../components/BlogFooter'
  import BlogPlateNavigation from '../components/BlogPlateNavigation'
  import BlogArticleCard from '../components/BlogArticleCard'
  import * as articleApi from '../api/article'

  export default {
    name: "blog-plate",
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
        articleApi.getPageableArticlesByPlateId(this.$route.params.id)
          .then(data => {
            this.articles = data.content
          })
          .catch(error => {
            console.log(error)
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
