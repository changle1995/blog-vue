<template>
  <div class="my-2">
    <nav class="nav nav-tabs justify-content-center">
      <router-link v-for="plate in plates"
                   :key="plate.name"
                   :to="{name: '板块', params: {plateName: plate.name}}"
                   class="nav-link p-2 text-muted" :class="{active: $route.params.plateName === plate.name}">
        {{plate.name}}
      </router-link>
    </nav>
  </div>
</template>

<script>
  import * as plateApi from '../modules/blog/api/plate'
  import * as util from '../utils'
  import config from '../config'

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
          .then((response) => {
            if (util.responseSuccess(response)) {
              this.plates = response.data[config.RESPONSE.DATA]
            } else {
              console.log(response)
            }
          })
          .catch(error => {
            alert(error)
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
