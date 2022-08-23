// 导入 router
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home/Home.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('@/pages/info/Myinfo.vue'),
  },
];
// 配置router对象
const router = createRouter({
  history: createWebHistory(),
  routes,
});
// 路由守卫==每次路由跳转都要执行
router.beforeEach(() => {
  console.log(1);
});
export default router;
