import { createRouter, createWebHistory } from "vue-router";


const routers = [
  {
    path: '/register',
    component: () => import('@/views/RegisterView.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/LoginView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
    routes: routers,
});

export default router;