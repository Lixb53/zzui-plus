<script lang="ts" setup>
import { ref } from 'vue'
defineOptions({
  name: 'ZzButton',
})

const _ref = ref<HTMLButtonElement>()

const handleClick = () => {
  // eslint-disable-next-line no-console
  console.log(_ref.value)
}
</script>

<template>
  <button ref="_ref" @click="handleClick">
    <slot>aaa</slot>
  </button>
</template>

<style lang="scss" scoped></style>
