import { createApp } from 'vue';
import App from './App.vue';
// 重置样式
import '@/style/reset.scss';
// 字体样式
import '@/style/icon.scss';
// 路由文件
import router from './router/index';
// pinia
import { createPinia } from 'pinia';

createApp(App).use(router).use(createPinia()).mount('#app');
