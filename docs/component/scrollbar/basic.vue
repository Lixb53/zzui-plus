<script lang="ts" setup>
const handleScroll = ({ scrollTop, scrollLeft }) => {
  console.log(scrollTop, scrollLeft)
}
</script>

<template>
  <zz-scrollbar height="400px" @scroll="handleScroll">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </zz-scrollbar>
</template>

<style lang="scss" scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--zz-color-primary-light-9);
  color: var(--zz-color-primary);
}
</style>
