<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    beforeCreate() {
      this.$store.dispatch('setRoutes', {router: this.$router}) // 获取动态路由
    }
  }
</script>

<style>
  .el-transfer-panel {
    width: 300px;
  }
</style>
