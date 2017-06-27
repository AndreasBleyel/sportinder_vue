import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Create from '@/components/Create'
import Detail from '@/components/Detail'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },

    {
      path: '/list',
      name: 'List',
      component: List
    },

    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },

    {
      path: '/create',
      name: 'Create',
      component: Create
    }

  ]
})
