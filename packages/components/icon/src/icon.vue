<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@zzui-plus/hooks'
import { addUnit, isUndefined } from '@zzui-plus/utils'
import { iconProps } from './icon'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ZzIcon',
  inheritAttrs: false,
})

const props = defineProps(iconProps)

const ns = useNamespace('icon')
const style = computed<CSSProperties>(() => {
  const { size, color } = props
  if (!size && !color) return {}
  return {
    fontSize: isUndefined(size) ? undefined : addUnit(size),
    '--color': color,
  }
})
</script>

<template>
  <i :class="[ns.b()]" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>
