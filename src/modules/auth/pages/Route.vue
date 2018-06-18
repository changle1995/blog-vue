<template>
  <el-container>
    <el-aside>
      <auth-nav-menu></auth-nav-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  import AuthNavMenu from '../components/AuthNavMenu'

  export default {
    name: "route",
    components: {
      AuthNavMenu
    }
  }
</script>
