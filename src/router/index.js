import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const treeTable = resolve => require(['components/tree'], resolve)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'tree',
      component: treeTable
    }
  ]
})
