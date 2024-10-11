<script lang="ts" setup>
import { ref } from 'vue'

const inputVal = ref('')
</script>

<template>
  <zz-input v-model="inputVal" disabled placeholder="请输入" />
</template>

<style lang="scss" scoped></style>
