<template>
  <div class="rounded">
    <div id="hotArticles" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li v-for="(item, index) in carousel"
            :key="index"
            data-target="#hotArticles"
            :data-slide-to="index"
            :class="{active: index === 0}"></li>
      </ol>
      <div class="carousel-inner" style="height: 30rem;">
        <router-link v-for="(item, index) in carousel"
                     :key="index"
                     :to="item.to"
                     tag="div"
                     class="carousel-item"
                     :class="{active: index === 0}">
          <img class="d-block w-100 m-auto"
               :src="item.src"
               style="cursor: pointer">
          <div class="carousel-caption d-none d-md-block text-secondary">
            <h5>{{item.title}}</h5>
            <p>{{item.description}}</p>
          </div>
        </router-link>
      </div>
      <a class="carousel-control-prev" href="#hotArticles" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#hotArticles" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "blog-carousel",
    props: {
      carousel: {
        type: Array,
        required: true
      }
    }
  }
</script>
