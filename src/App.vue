<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'app',
    created() {
      this.$store.dispatch('updateProps', this.$router)
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
