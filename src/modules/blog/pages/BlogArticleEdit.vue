<template>
  <div>
    <!--头部-->
    <blog-header/>
    <!--相关内容编辑区-->
    <form class="container my-3">
      <div class="row">
        <div class="col-8">
          <div class="form-group">
            <input type="text" class="form-control" id="title" placeholder="标题" v-model="article.title">
          </div>
          <div class="form-group">
            <select class="form-control" id="plate" v-model.number="article.plateId">
              <option value="">请选择板块</option>
              <option v-for="plate in plateOptions" :key="plate.id" :value="plate.id">{{plate.name}}</option>
            </select>
          </div>
          <div class="form-group">
            <textarea class="form-control" id="description" rows="2" placeholder="描述"
                      v-model="article.description"></textarea>
          </div>
          <div class="form-group">
            <quill-editor v-model="article.content" :options="editorOption" style="background-color: white;"/>
          </div>
        </div>
        <div class="col-4">
          <form class="card bg-light">
            <img class="card-img-top" :src="article.thumbnail" alt="请选择一张图片" height="200px">
            <div class="card-footer text-center">
              <input type="file" accept="image/*" class="form-control btn btn-light" @change="selectThumbnail"/>
            </div>
          </form>
          <div class="card mt-3">
            <h5 class="card-header text-center">标签</h5>
            <div class="card-body">
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="新增标签" v-model="tag"/>
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" @click="addTag">增加</button>
                </div>
              </div>
              <ul class="list-unstyled text-center">
                <li v-for="tag in article.tag" :key="tag">{{tag}}</li>
              </ul>
            </div>
          </div>
          <div class="text-center my-2">
            <button class="btn btn-success" @click.prevent="addOrEdit">提交</button>
          </div>
        </div>
      </div>
    </form>
    <!--尾部-->
    <blog-footer/>
  </div>
</template>

<script>
  import BlogHeader from '../components/BlogHeader'
  import BlogFooter from '../components/BlogFooter'
  import config from '../../../config'
  import {editorOption} from '../../../config/quill'
  import * as fileApi from '../../../api/file'
  import {getAllPlates} from '../api/plate'
  import {addArticle, editArticle} from '../api/article'

  export default {
    name: "blog-article-edit",
    components: {
      BlogHeader,
      BlogFooter
    },
    data() {
      return {
        plateOptions: [],
        tag: '',
        article: {
          id: null,
          title: '',
          description: '',
          content: '',
          userId: '',
          plateId: '',
          thumbnail: '',
          tag: []
        },
        editorOption: editorOption
      }
    },
    methods: {
      selectThumbnail(e) {
        let file = e.target.files[0]
        if (file) {
          fileApi.upload(file)
            .then(data => {
              this.article.thumbnail = config.BASE_URL + 'file/' + data
            })
            .catch(error => {
              console.log(error)
            })
        } else {
          this.article.thumbnail = ''
        }
      },
      addTag() {
        this.article.tag.push(this.tag)
        this.tag = ''
      },
      addOrEdit() {
        if (this.article.id) {
          editArticle(this.article)
            .then(data => {
              this.$router.push({name: '文章', params: {id: data.id}})
            })
            .catch(error => {
              console.log(error)
            })
        } else {
          addArticle(this.article)
            .then(data => {
              this.$router.push({name: '文章', params: {id: data.id}})
            })
            .catch(error => {
              console.log(error)
            })
        }
      },
      init() {
        let user = JSON.parse(localStorage.getItem(config.LOCAL_STORAGE.USER))
        if (!user) {
          this.$router.replace({name: '登录'})
        } else {
          this.article.userId = user[config.LOCAL_STORAGE.USER_VALUE.ID]
          getAllPlates()
            .then(data => {
              this.plateOptions = data
            })
            .catch(error => {
              console.log(error)
            })
        }
      }
    },
    created() {
      this.init()
    }
  }
</script>
