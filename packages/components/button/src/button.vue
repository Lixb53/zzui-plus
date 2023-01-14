<script lang="ts" setup>
import { ref } from 'vue'
import { useNamespace } from '@zzui-plus/hooks'
import { buttonEmits, buttonProps } from './button'
import { useButton } from './use-button'

defineOptions({
  name: 'ZzButton',
})

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const _ref = ref<HTMLButtonElement>()
const ns = useNamespace('button')

const { _type } = useButton(props, emit)

const handleClick = () => {
  // eslint-disable-next-line no-console
  console.log(_ref.value)
}
</script>

<template>
  <button
    ref="_ref"
    :class="[
      ns.b(),
      ns.m(_type),
      ns.is('plain', plain),
      ns.is('round', round),
      ns.is('circle', circle),
    ]"
    @click="handleClick"
  >
    <slot>aa</slot>
  </button>
</template>

<style lang="scss" scoped></style>
