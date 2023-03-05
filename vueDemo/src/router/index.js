import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import testDemo from '../components/items/testDemo'
import testDemo2 from '../components/items/testDemo2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/testDemo',
      component: testDemo
    },
    {
      path: '/testDemo2/:id',
      name: 'testDemo2',
      component: testDemo2
    }
  ]
})
