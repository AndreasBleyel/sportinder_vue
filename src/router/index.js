import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Create from '@/components/Create'
import Detail from '@/components/Detail'
import List from '@/components/List'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

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
