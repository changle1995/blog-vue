let routes = [
  {
    name: '板块',
    path: '/plate/:id',
    component: (resolve) => require(['../../pages/BlogPlate'], resolve)
  },
  {
    name: '文章',
    path: '/article/:id',
    component: (resolve) => require(['../../pages/BlogArticle'], resolve)
  },
  {
    name: '文章编辑',
    path: '/articleEdit',
    component: (resolve) => require(['../../pages/BlogArticleEdit'], resolve)
  }
]

export default routes
