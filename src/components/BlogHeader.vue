<template>
  <header role="banner" class="blog-header">
    <div class="blog-header-inner">
      <nav role="navigation" class="navbar navbar-expand-lg navbar-light">
        <router-link class="navbar-brand" :to="brand.to">
          <img :src="brand.src" width="40" height="40">{{brand.content}}
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
            <input class="form-control input input-grey" type="search" placeholder="Search">
            <a class="text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-3">
                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
              </svg>
            </a>
          </form>
          <ul class="navbar-nav" v-if="userInfo.user">
            <li class="nav-item dropdown">
              <router-link class="nav-link" to="" role="button" data-toggle="dropdown">
                <img class="rounded-circle"
                     :src="getAvatar"
                     width="30px"
                     height="30px">
              </router-link>
              <div class="dropdown-menu dropdown-menu" style="min-width: 100%;">
                <router-link class="dropdown-item" :to="{name: '我的主页'}">我的主页</router-link>
                <router-link class="dropdown-item" :to="{name: '设置'}">设置</router-link>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" @click="logout">退出</a>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav" v-else>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: '注册'}">注册</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: '登录'}">登录</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
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
          {content: '发现', to: {name: '首页'}},
          {content: '话题', to: {name: '首页'}}
        ],
        userInfo: {
          user: null,
          defaultAvatar: require('../assets/logo.png')
        }
      }
    },
    computed: {
      getAvatar() {
        let avatar = this.userInfo.user[config.LOCAL_STORAGE.USER_VALUE.AVATAR]
        return avatar !== null && avatar.length > 0 ? avatar : this.userInfo.defaultAvatar
      }
    },
    methods: {
      init() {
        this.userInfo.user = JSON.parse(localStorage.getItem(config.LOCAL_STORAGE.USER))
      },
      logout() {
        this.$store.dispatch('logout')
          .then(() => {
            this.$store.dispatch('deleteProps', {router: this.$router})
            this.init()
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

<style scoped>

  .blog-header {
    background: #fff;
    box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
    font-size: 16px;
  }

  .blog-header a {
    cursor: pointer;
  }

  .blog-header-inner {
    position: relative;
    width: 85%;
    height: 60px;
    margin: 0 auto;
  }

  .blog-header-inner .input-grey {
    background: #f6f6f6;
  }

  .blog-header-inner .input {
    font-size: inherit;
    border: none;
  }

</style>
