<template>
  <footer class="container-fluid blog-footer pt-5 border-top">
    <div class="row">
      <div class="col">
        <h5>后端技术</h5>
        <ul class="list-unstyled text-small">
          <li>
            <a class="text-muted"
               href="https://spring.io/projects/spring-framework/"
               target="_blank">spring-framework
            </a>
          </li>
          <li>
            <a class="text-muted"
               href="https://spring.io/projects/spring-boot/"
               target="_blank">spring-boot
            </a>
          </li>
          <li>
            <a class="text-muted"
               href="https://spring.io/projects/spring-security/"
               target="_blank">spring-security
            </a>
          </li>
          <li>
            <a class="text-muted"
               href="http://projects.spring.io/spring-data-jpa/"
               target="_blank">spring-data-jpa
            </a>
          </li>
        </ul>
      </div>
      <div class="col">
        <h5>前端技术</h5>
        <ul class="list-unstyled text-small">
          <li>
            <a class="text-muted"
               href="https://cn.vuejs.org/"
               target="_blank">Vue
            </a>
          </li>
          <li>
            <a class="text-muted"
               href="https://router.vuejs.org/"
               target="_blank">Vue Router
            </a>
          </li>
          <li>
            <a class="text-muted"
               href="https://vuex.vuejs.org/"
               target="_blank">Vuex
            </a>
          </li>
          <li>
            <a class="text-muted"
               href="http://www.bootcss.com/"
               target="_blank">Bootstrap
            </a>
          </li>
        </ul>
      </div>
      <div class="col">
        <h5>项目源码</h5>
        <ul class="list-unstyled text-small">
          <li>
            <a class="text-muted"
               href="https://github.com/changle1995/blog-vue/"
               target="_blank">前端项目
            </a>
          </li>
          <li>
            <a class="text-muted"
               href="https://github.com/changle1995/blog/"
               target="_blank">后端项目
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "blog-footer"
  }
</script>

<style scoped>
  .blog-footer {
    text-align: center;
    background-color: #f9f9f9;
  }
</style>
