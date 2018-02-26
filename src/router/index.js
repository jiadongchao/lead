import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Person from '@/views/person/Person'
import Lead from '@/views/lead/Lead'
import Admin from '@/views/admin/Admin'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[
        { path: '/Login', component: Login},
        { path: '/Person', component: Person},
        { path: '/Lead', component: Lead},
        { path: '/Admin', component: Admin},
      ]
    },

  ]
})
