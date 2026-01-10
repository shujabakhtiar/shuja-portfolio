import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/project/:slug',
    name: 'ProjectDetails',
    component: () => import('@/pages/ProjectDetailsPage.vue'),
    props: true
  },
  // Catch-all route to redirect back home or to a 404 page
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      window.isNavigating = true;
      setTimeout(() => {
        window.isNavigating = false;
      }, 2000);
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})

export default router
