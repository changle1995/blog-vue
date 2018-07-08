<template>
  <div>
    <blog-header/>
    <div class="container">
      <blog-plate-nav/>
      <blog-carousel :carousel="carousel"/>
      <blog-article-card :articles="articles"/>
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
        articles: [
          {
            id: 1,
            title: '标题1',
            description: '描述1',
            author: '常乐',
            createDate: '2018年7月7日18:21:38',
            img: {src: '/static/logo.png', alt: '替代文字'}
          },
          {
            id: 2,
            title: '标题2',
            description: '描述2',
            author: '常乐',
            createDate: '2018年7月7日22:05:47',
            img: {src: '/static/jzc.jpg', alt: '替代文字'}
          },
          {
            id: 3,
            title: '标题2',
            description: '描述2',
            author: '常乐',
            createDate: '2018年7月7日22:05:47',
            img: {src: '/static/zxxz.jpg', alt: '替代文字'}
          },
          {
            id: 4,
            title: '标题2',
            description: '描述2',
            author: '常乐',
            createDate: '2018年7月7日22:05:47',
            img: {src: '/static/lcw.jpg', alt: '替代文字'}
          }
        ]
      }
    }
  }
</script>

<style scoped>
</style>
