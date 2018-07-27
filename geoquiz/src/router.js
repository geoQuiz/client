import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Testing from './views/testing.vue'
import register from "./views/signUp.vue"
import Answer from "./views/chatboard.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/testing',
      name: 'testing',
      component: Testing
    },
    {
      path: '/signup',
      name: 'signup',
      component: register
    },
    {
      path: '/answer',
      name: "answer",
      component: Answer
    }
  ]
})
