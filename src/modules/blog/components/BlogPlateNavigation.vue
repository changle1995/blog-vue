<template>
  <nav class="navbar navbar-expand">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" v-for="plate in plates" :key="plate.id">
        <router-link :to="{name: '板块', params: {id: plate.id}}"
                     class="nav-link text-dark"
                     :class="{active: $route.params.id == plate.id}"
                     v-text="plate.name"/>
      </li>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link text-muted" :to="{name: '文章编辑'}">编写文章</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  import {getAllPlates} from '../api/plate'

  export default {
    name: "blog-plate-navigation",
    data() {
      return {
        plates: []
      }
    },
    methods: {
      getPlates() {
        getAllPlates()
          .then(data => {
            this.plates = data
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    created() {
      this.getPlates()
    }
  }
</script>
