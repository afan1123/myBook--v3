import { createRouter, createWebHistory } from 'vue-router';

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
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
