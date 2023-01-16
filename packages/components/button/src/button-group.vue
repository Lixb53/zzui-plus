<script lang="ts" setup>
import { provide, reactive, toRef } from 'vue'
import { useNamespace } from '@zzui-plus/hooks'
import { buttonGroupContextKey } from '@zzui-plus/tokens'
import { buttonGroupProps } from './button-group'
defineOptions({
  name: 'ZzButtonGroup',
})

const props = defineProps(buttonGroupProps)

const ns = useNamespace('button')
provide(
  buttonGroupContextKey,
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type'),
  })
)
</script>

<template>
  <div :class="`${ns.b('group')}`">
    <slot />
  </div>
</template>
