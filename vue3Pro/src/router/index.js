import { createRouter, createWebHistory } from 'vue-router';
import { useStore } from 'vuex';
const routes = [
  {
    path: '/',
    redirect: {
      name: 'home',
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../pages/home.vue'),
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../pages/list.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login.vue'),
  },
  {
    path: '/staff',
    name: 'staff',
    component: () => import('../pages/staff.vue'),
  },
  {
    path: '/:id/edit',
    name: 'edit',
    component: () => import('../pages/edit.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
