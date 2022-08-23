<template>
  <div class="app">
    <router-link to="/"><i class="iconfont">&#xe89f;</i>Home</router-link>
    <router-link to="/info">info</router-link>
  </div>
  <router-view></router-view>
</template>
<style lang="scss" scoped>
.app {
  width: 100%;
  a {
    display: inline-block;
    width: 100px;
    padding: 20px;
  }
}
</style>
