import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
    },
    {
      path: '/call-logs',
      name: 'call-logs',
      component: () => import('../views/CallLogsView.vue'),
    },
    {
      path: '/agents',
      name: 'agents',
      component: () => import('../views/AgentsView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        isHideSidebar: true,
      },
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/CallLogsView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error-view',
      component: () => import('../views/ErrorView.vue'),
      meta: {
        isHideSidebar: true,
      },
    },
  ],
})

export default router
