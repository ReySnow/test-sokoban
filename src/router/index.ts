import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/game'
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('@/views/Game.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('@/views/Edit.vue')
    }
  ]
})
