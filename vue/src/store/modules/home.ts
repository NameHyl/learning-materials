// 连接pinia
import { defineStore } from 'pinia';
// 请求
import { req } from '../../utils/request';
// ts格式
import { home_main, home_data } from '@/types/home';
const useHomeStore = defineStore('home', {
  // 数据
  state: () => {
    return {
      list: [] as home_main[],
      data: [] as home_data[],
    };
  },
  //异步请求
  actions: {
    async getData() {
      const { data } = await req.get<home_main[]>('/home_main');
      this.list = data;
    },
    async getHomeData() {
      const { data } = await req.get('/home_data');
      this.data = data;
    },
  },
});

export default useHomeStore;
