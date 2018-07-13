<template>
  <div>
    <blog-header/>
    <div class="container">
      <blog-plate-nav/>
      <blog-carousel :carousel="carousel"/>
      <blog-article-card v-if="articles" :articles="articles"/>
    </div>
    <blog-footer/>
  </div>
</template>

<script>
  import BlogHeader from '../components/BlogHeader'
  import BlogFooter from '../components/BlogFooter'
  import BlogPlateNav from '../components/BlogPlateNav'
  import BlogCarousel from '../components/BlogCarousel'
  import BlogArticleCard from '../components/BlogArticleCard'
  import * as articleApi from '../modules/blog/api/article'
  import * as utils from '../utils'

  export default {
    name: "home",
    components: {
      BlogHeader,
      BlogFooter,
      BlogPlateNav,
      BlogCarousel,
      BlogArticleCard
    },
    data() {
      return {
        carousel: [
          {
            src: '/static/logo.png',
            to: {name: '板块', params: {plateName: '板块1'}},
            alt: '第一张图',
            title: '第一张图',
            description: '第一张图'
          },
          {
            src: '/static/jzc.jpg',
            to: {name: '板块', params: {plateName: '板块2'}},
            alt: '第二张图',
            title: '第二张图',
            description: '第二张图'
          },
          {
            src: '/static/logo.png',
            to: {name: '板块', params: {plateName: '板块3'}},
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
