<template>
  <div class="my-2">
    <nav class="nav nav-tabs justify-content-center">
      <router-link v-for="item in menu"
                   :key="item.name"
                   :to="{name:item.name}"
                   class="nav-link p-2 text-muted"
                   :class="{active: $route.name === item.name}">
        {{item.name}}
      </router-link>
    </nav>
  </div>
</template>

<script>
  import children from '../config/router/children'
  import {getUserRoutes} from '../api/route'

  export default {
    name: "auth-header",
    data() {
      return {
        menu: []
      }
    },
    methods: {
      init() {
        getUserRoutes()
          .then(data => {
            children.forEach(route => {
              if (data) {
                data.forEach(value => {
                  if (route.name === value.name && !this.menu.includes(route)) {
                    this.menu.push(route)
                  }
                })
              }
            })
          })
      }
    },
    created() {
      this.init()
    }
  }
</script>
