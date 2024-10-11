<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { useNamespace } from '@zzui-plus/hooks'
import { addUnit } from '@zzui-plus/utils'
import { formItemProps } from './form-item'
import FormLabelWrap from './form-label-wrap'
import { formContextKey } from './constants'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ZzFormItem',
})

const props = defineProps(formItemProps)

const formContext = inject(formContextKey, undefined)

const formItemRef = ref<HTMLDivElement>()

const ns = useNamespace('form-item')

const formItemClasses = computed(() => [ns.b()])

const currentLabel = computed(() => () => `${props.label || ''}`)

const labelStyle = computed<CSSProperties>(() => {
  const labelWidth = addUnit(props.labelWidth || formContext?.labelWidth || '')
  if (labelWidth) return { width: labelWidth }
  return {}
})
</script>

<template>
  <div ref="formItemRef" :class="formItemClasses">
    <form-label-wrap :is-auto-width="labelStyle.width === 'auto'">
      <component :is="'label'" :class="ns.e('label')" :style="labelStyle">
        <slot name="label">
          {{ currentLabel }}
        </slot>
      </component>
    </form-label-wrap>
    <div :class="ns.e('content')">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
