import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/Main'
import testDemo from '../components/items/testDemo'
import antiFakeGuide from '../components/items/AntiFakeGuide'
import carWash from '../components/CarWash'
import DatePage from '../components/items/DatePage'
import Learning from '../components/items/Learning'
import waitingTask from '../components/items/WaitingTask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: main
    },
    {
      path: '/testDemo',
      component: testDemo
    },
    {
      path: '/antiFakeGuide/:id',
      name: 'antiFakeGuide',
      component: antiFakeGuide
    },
    {
      path: '/carWash/:id',
      name: 'carWash',
      component: carWash
    },
    {
      path: '/datePage/:id',
      name: 'datePage',
      component: DatePage
    },
    {
      path: '/learning/:id',
      name: 'learning',
      component: Learning
    },
    {
      path: '/waitingTask/:id',
      name: 'waitingTask',
      component: waitingTask
    }
  ]
})
