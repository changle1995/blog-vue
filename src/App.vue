<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created() {
      this.$store.dispatch('updateProps', {router: this.$router})
    }
  }
</script>

<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;
    margin: 0;
    padding: 0;
    background: #f6f6f6;
    font-size: 15px;
    color: #1a1a1a;
  }
</style>
