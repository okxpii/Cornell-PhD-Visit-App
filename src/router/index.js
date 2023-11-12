import { createRouter, createWebHistory } from 'vue-router'
import ScheduleView from '../views/ScheduleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ScheduleView
    },
    {
      path: '/networking',
      name: 'networking',
      component: () => import('../views/NetworkingView.vue')
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('../views/ResourcesView.vue')
    },
    {
      path: '/announcements',
      name: 'announcements',
      component: () => import('../views/AnnouncementsView.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQView.vue')
    },
    {
      path: '/reimbursement',
      name: 'reimbursement',
      component: () => import('../views/ReimbursementView.vue')
    },
    {
      path: '/transportation',
      name: 'transportation',
      component: () => import('../views/TransportationView.vue')
    },
  ]
})

export default router
