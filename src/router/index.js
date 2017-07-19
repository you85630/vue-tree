import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const treeTable = resolve => require(['components/tree'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tree',
      component: treeTable
    }
  ]
})
