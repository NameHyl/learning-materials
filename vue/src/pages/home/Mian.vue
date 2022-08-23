<script setup lang="ts">
const props = defineProps<{
  item: any;
}>();
</script>
<template>
  <div class="main">
    <img src="@/assets/image/20220606090048_1.jpg" alt="" />
    <div class="main__des">
      <div class="main__des__end">
        <p>{{ item.describe }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main {
  position: relative;
  display: flex;
  align-items: center;
  width: 200px;
  height: 150px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  &__des {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    &__end {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>