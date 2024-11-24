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
      path: '/phone-numbers',
      name: 'phone-numbers',
      component: () => import('../views/PhoneNumbersView.vue'),
    },
    {
      path: '/agents',
      name: 'agents',
      component: () => import('../views/AgentsView.vue'),
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsView.vue'),
    },
    {
      path: '/knowledgebase',
      name: 'knowledgebase',
      component: () => import('../views/KnowledgebaseView.vue'),
    },
    {
      path: '/voices',
      name: 'voices',
      component: () => import('../views/VoicesView.vue'),
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: () => import('../views/AnalysisView.vue'),
    },
    {
      path: '/integrations',
      name: 'integrations',
      component: () => import('../views/IntegrationsView.vue'),
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
