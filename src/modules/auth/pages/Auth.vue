<template>
  <el-container>
    <el-header>
      <auth-nav-menu/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
  import AuthNavMenu from '../components/AuthNavMenu'

  export default {
    name: "auth",
    components: {
      AuthNavMenu
    }
  }
</script>
