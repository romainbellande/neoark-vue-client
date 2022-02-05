import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const Dashboard = () => import('../views/Dashboard');

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: Dashboard,
  },
  {
    path: '/:pathMatch(.*)',
    redirect: `/`,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
