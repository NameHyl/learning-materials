<script setup lang="ts">
import Navgiter from "./Navgiter.vue";
import Mian from "./Mian.vue";
import Footer from "./Footer.vue";
//引入
import { storeToRefs } from "pinia";
import useStore from "../../store";
const { home } = useStore();
const { getData } = home;
getData();
const { list } = storeToRefs(home);
</script>
<template>
  <div>
    <Navgiter />
    <Mian v-for="item in list" :key="item.id" :item="item" />
    <Footer />
  </div>
</template>