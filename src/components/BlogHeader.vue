<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link class="navbar-brand" :to="brand.to">
      <img :src="brand.src" width="30" height="30">{{brand.content}}
    </router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li v-for="navItem in navItems" :key="navItem.content" class="nav-item">
          <router-link class="nav-link" :to="navItem.to">
            {{navItem.content}}
          </router-link>
        </li>
      </ul>
      <form class="form-inline">
        <input class="form-control mr-2" type="search" placeholder="Search">
        <a class="text-muted" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-3">
            <circle cx="10.5" cy="10.5" r="7.5"></circle>
            <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
          </svg>
        </a>
      </form>
      <ul class="navbar-nav" v-if="userInfo.user">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: '文章编辑'}">编写文章</router-link>
        </li>
        <li class="nav-item dropdown">
          <router-link class="nav-link" to="" role="button" data-toggle="dropdown">
            <img class="rounded-circle" :src="userInfo.login.avatarSrc" width="25px" height="25px">
          </router-link>
          <div class="dropdown-menu dropdown-menu-right" style="min-width: 100%;">
            <router-link v-for="navItem in userInfo.login.navItems"
                         :key="navItem.content"
                         :to="navItem.to"
                         class="dropdown-item">
              {{navItem.content}}
            </router-link>
          </div>
        </li>
      </ul>
      <ul class="navbar-nav" v-else>
        <li v-for="navItem in userInfo.notLogin.navItems" :key="navItem.content" class="nav-item">
          <router-link class="nav-link" :to="navItem.to">
            {{navItem.content}}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import config from '../config'

  export default {
    name: "blog-header",
    data() {
      return {
        brand: {
          to: {
            name: '首页'
          },
          src: require('../assets/logo.png'),
          content: '博客系统'
        },
        navItems: [
          {content: '友情链接1', to: {name: '首页'}},
          {content: '友情链接2', to: {name: '首页'}},
          {content: '友情链接3', to: {name: '首页'}}
        ],
        userInfo: {
          user: null,
          login: {
            avatarSrc: '/static/logo.png',
            navItems: [
              {content: '操作1', to: {name: '文章编辑'}},
              {content: '操作2', to: {name: '文章编辑'}},
              {content: '操作3', to: {name: '文章编辑'}}
            ]
          },
          notLogin: {
            navItems: [
              {content: '注册', to: {name: '文章编辑'}},
              {content: '登录', to: {name: '文章编辑'}}
            ]
          }
        }
      }
    },
    methods: {
      init() {
        this.userInfo.user = JSON.parse(localStorage.getItem(config.LOCAL_STORAGE.USER))
      }
    },
    created() {
      this.init()
    }
  }
</script>
