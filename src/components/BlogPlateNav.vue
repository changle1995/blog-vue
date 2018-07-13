<template>
  <div class="my-2">
    <nav class="nav nav-tabs justify-content-center">
      <router-link v-for="plate in plates"
                   :key="plate.id"
                   :to="{name: '板块', params: {id: plate.id}}"
                   class="nav-link p-2 text-muted"
                   :class="{active: $route.params.id === plate.id}">
        {{plate.name}}
      </router-link>
    </nav>
  </div>
</template>

<script>
  import * as plateApi from '../modules/blog/api/plate'
  import * as utils from '../utils'

  export default {
    name: "blog-plate-nav",
    data() {
      return {
        plates: []
      }
    },
    methods: {
      getPlates() {
        plateApi.get()
          .then(data => {
            this.plates = data
          })
          .catch(error => {
            this.$message(utils.createElementMessage(error, 'error'))
          })
      }
    },
    created() {
      this.getPlates()
    }
  }
</script>

<style scoped>
  .nav-tabs {
    border-bottom: none;
  }
  .nav-tabs .active {
    background-color: ghostwhite;
  }
</style>
