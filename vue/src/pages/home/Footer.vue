<script setup lang="ts">
import { storeToRefs } from "pinia";
import useStore from "@/store";
const { home } = useStore();
const { getHomeData } = home;
getHomeData();
const { data } = storeToRefs(home);
</script>
<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item.id">{{ item.msg }}</li>
    </ul>
  </div>
</template>