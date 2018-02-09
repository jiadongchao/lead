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
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },   
     {
      path: '/Person',
      name: 'Person',
      component: Person
    },  
    {
     path: '/Lead',
     name: 'Lead',
     component: Lead
   },   
   {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  }
  ]
})
