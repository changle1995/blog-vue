<template>
  <footer class="container-fluid blog-footer pt-5 border-top">
    <div class="row">
      <div class="col" v-for="column in footer.columns" :key="column.title">
        <h5 v-text="column.title"/>
        <ul class="list-unstyled text-small">
          <li v-for="project in column.projects" :key="project.name">
            <a class="text-muted" :href="project.href" target="_blank" v-text="project.name"></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "blog-footer",
    data() {
      return {
        footer: {
          columns: [
            {
              title: '后端技术',
              projects: [
                {
                  name: 'spring-framework',
                  href: 'https://spring.io/projects/spring-framework/'
                },
                {
                  name: 'spring-boot',
                  href: 'https://spring.io/projects/spring-boot/'
                },
                {
                  name: 'spring-security',
                  href: 'https://spring.io/projects/spring-security/'
                },
                {
                  name: 'spring-data-jpa',
                  href: 'http://projects.spring.io/spring-data-jpa/'
                }
              ]
            },
            {
              title: '前端技术',
              projects: [
                {
                  name: 'Vue',
                  href: 'https://cn.vuejs.org/'
                },
                {
                  name: 'Vue Router',
                  href: 'https://router.vuejs.org/'
                },
                {
                  name: 'Vuex',
                  href: 'https://vuex.vuejs.org/'
                },
                {
                  name: 'Bootstrap',
                  href: 'http://www.bootcss.com/'
                }
              ]
            },
            {
              title: '项目源码',
              projects: [
                {
                  name: '前端项目',
                  href: 'https://github.com/changle1995/blog-vue/'
                },
                {
                  name: '后端项目',
                  href: 'https://github.com/changle1995/blog/'
                }
              ]
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .blog-footer {
    text-align: center;
    background-color: #f9f9f9;
  }
</style>
