<template>
  <el-menu :default-active="this.$route.name"
           class="el-menu-vertical-demo"
           :background-color="backgroundColor"
           :text-color="textColor"
           :active-text-color="activeTextColor"
           :unique-opened="uniqueOpened"
           router>
    <el-submenu v-for="route in menu" :index="route.name" :key="route.name">
      <template slot="title">{{route.name}}</template>
      <el-menu-item v-for="child in menuChildren(route.name)" :route="child" :index="child.name" :key="child.name">{{child.name}}</el-menu-item>
    </el-submenu>
    <el-menu-item :route="{path: '/home'}" index="用户信息">
      {{user.username}}
    </el-menu-item>
    <el-menu-item :route="{path: '/home'}" index="首页">
      <i class="el-icon-location"></i>首页
    </el-menu-item>
    <el-menu-item @click="logout" :route="{path: '/login'}" index="退出">
      <i class="el-icon-circle-close"></i>退出
    </el-menu-item>
  </el-menu>
</template>

<script>
  import config from '../../../config'
  import authRoutes from '../config/router'
  import * as utils from '../../../utils'

  export default {
    name: "auth-header",
    data() {
      return {
        menu: [],
        user: {}
      }
    },
    props: {
      backgroundColor: {
        type: String,
        default: '#545c64'
      },
      textColor: {
        type: String,
        default: '#fff'
      },
      activeTextColor: {
        type: String,
        default: '#ffd04b'
      },
      uniqueOpened: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
          .then(() => {
            location.reload()
          }, () => {
            this.$message(utils.createElementMessage('退出失败', 'error'))
          })
      },
      menuChildren(parentName) {
        return utils.getRoutesByParentName(this.user[config.LOCAL_STORAGE.USER_VALUE.ROUTES], authRoutes, parentName)
      }
    },
    created() {
      this.user = JSON.parse(localStorage.getItem(config.LOCAL_STORAGE.USER))
      if (!user) {
        this.$router.push('/login')
        location.reload()
      }
      this.menu = utils.getRoutesByLevel(this.user[config.LOCAL_STORAGE.USER_VALUE.ROUTES], authRoutes, 1)
    }
  }
</script>
