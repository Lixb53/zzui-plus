<script lang="ts" setup>
import { computed, provide, reactive, toRefs } from 'vue'
import { useNamespace } from '@zzui-plus/hooks'
import { formEmits, formProps } from './form'
import { formContextKey } from './constants'
import { useFormLabelWidth } from './utils'

defineOptions({
  name: 'ZzForm',
})

const props = defineProps(formProps)
const emit = defineEmits(formEmits)

// eslint-disable-next-line no-console
console.log(props)

const ns = useNamespace('form')

const formClasses = computed(() => {
  return [
    ns.b(),
    // ns.m(formSize.value || 'default'),
    {
      // [ns.m(`label-${labelPosition}`)]: labelPosition,
      // [ns.m('inline')]: inline,
    },
  ]
})

provide(
  formContextKey,
  reactive({
    ...toRefs(props),
    emit,
    ...useFormLabelWidth(),
  })
)
</script>

<template>
  <div :class="formClasses">
    <slot />
  </div>
</template>
