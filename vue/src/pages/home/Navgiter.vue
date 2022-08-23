<template>
  <div class="nav">
    <i class="iconfont"></i>
    <span>this is my world...</span>
  </div>
</template>
<style lang="scss" scoped>
@import "../../style/mixin.scss";
.nav {
  @include box-shadow;
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>