import Vue from 'vue'
import Router from 'vue-router'
import Carros from '@/features/carros'
import Teste from '@/features/teste'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Carros',
      component: Carros
    },
    {
      path: '/teste',
      name: 'Teste',
      component: Teste
    }
  ]
})
