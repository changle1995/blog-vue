<template>
  <div>
    <!--头部-->
    <blog-header/>
    <div class="jumbotron">
      <div class="container">
        <div class="page-header">
          <h1 class="display-4">{{article.title}}</h1>
          <p class="lead">{{article.description}}</p>
        </div>

        <div class="row">
          <!--文章正文-->
          <div class="col-8">
            <div v-html="article.content"></div>
          </div>

          <!--其余相关连接-->
          <div class="col-3 col-offset-1">
            <div>
              <h4>About</h4>
              <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet
                fermentum.
                Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>
            <div>
              <h4>Archives</h4>
              <ol class="list-unstyled">
                <li><a href="https://www.baidu.com">March 2014</a></li>
                <li><a href="https://www.baidu.com">February 2014</a></li>
                <li><a href="https://www.baidu.com">January 2014</a></li>
                <li><a href="https://www.baidu.com">December 2013</a></li>
                <li><a href="https://www.baidu.com">November 2013</a></li>
                <li><a href="https://www.baidu.com">October 2013</a></li>
                <li><a href="https://www.baidu.com">September 2013</a></li>
                <li><a href="https://www.baidu.com">August 2013</a></li>
                <li><a href="https://www.baidu.com">July 2013</a></li>
                <li><a href="https://www.baidu.com">June 2013</a></li>
                <li><a href="https://www.baidu.com">May 2013</a></li>
                <li><a href="https://www.baidu.com">April 2013</a></li>
              </ol>
            </div>
            <div>
              <h4>Elsewhere</h4>
              <ol class="list-unstyled">
                <li><a href="https://www.baidu.com">GitHub</a></li>
                <li><a href="https://www.baidu.com">Twitter</a></li>
                <li><a href="https://www.baidu.com">Facebook</a></li>
              </ol>
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
  import BlogHeader from '../../../components/BlogHeader'
  import BlogFooter from '../../../components/BlogFooter'
  import * as articleApi from '../api/article'
  import * as utils from '../../../utils'

  export default {
    name: "blog-article",
    components: {
      BlogHeader,
      BlogFooter
    },
    data() {
      return {
        article: {}
      }
    },
    methods: {
      init() {
        articleApi.get({id: this.$route.params.id})
          .then(data => {
            this.article = data[0]
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
