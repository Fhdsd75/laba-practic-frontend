// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// наши страницы
import Home     from '../views/Home.vue'
import Catalog  from '../views/Catalog.vue'
import Add      from '../views/Add.vue'
import Details  from '../views/Details.vue'
import About    from '../views/About.vue'

const routes = [
  { path: '/',          name: 'Home',    component: Home },
  { path: '/catalog',   name: 'Catalog', component: Catalog },
  { path: '/add',       name: 'Add',     component: Add },
  { path: '/details/:id', name: 'Details', component: Details, props: true },
  { path: '/about',     name: 'About',   component: About },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
