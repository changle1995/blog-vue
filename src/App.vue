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
  body {
    margin: 0;
    padding: 0;
  }

  .el-transfer-panel {
    width: 300px;
  }
</style>
