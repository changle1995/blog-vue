<template>
  <div>
    <router-link :to="{path: '/auth/user/display'}">用户管理</router-link>
    <router-link :to="{path: '/auth/role/display'}">角色管理</router-link>
    <router-link :to="{path: '/auth/permission/display'}">后端权限管理</router-link>
    <router-link :to="{path: '/auth/route/display'}">路由管理</router-link>
  </div>
</template>

<script>
  export default {
    name: "home"
  }
</script>

<style scoped>

</style>
