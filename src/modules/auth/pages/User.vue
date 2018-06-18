<template>
  <el-container>
    <el-aside>
      <auth-header></auth-header>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  import AuthHeader from '../components/AuthNavMenu'

  export default {
    name: "user",
    components: {
      AuthHeader
    }
  }
</script>
