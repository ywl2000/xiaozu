import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//导入组件文件
import Header from '../components/demo/Header';
import Field from '../components/demo/Field.vue'
import List from '../components/demo/List.vue'
import Tabbar from '../components/demo/Tabbar.vue'
import Tabbar2 from '../components/demo/Tabbar2.vue'
import Login from '../components/demo/Login.vue'
import Navbar from '../components/demo/Navbar.vue'


//项目组件文件
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/navbar",
    component:Navbar
  },
  {
    path:"/Register",
    component:Register
  },
  {
    path:"/Login",
    component:Login
  },
  {
    path:"/tabbar2",
    component:Tabbar2
  },
  {
    path:"/tabbar",
    component:Tabbar
  },
  {
    path:"/List",
    component:List
  },
  {
    path:"/field",
    component:Field
  },
  {
    path:"/header",
    component:Header
  },
  {
    path: '/',
    // name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
