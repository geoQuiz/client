import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Board from './views/Board.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/board',
      name: 'board',
      component: Board
    }
  ]
})
