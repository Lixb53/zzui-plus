<script lang="ts" setup>
import { computed, nextTick, shallowRef } from 'vue'
import {
  useComposition,
  useFocusController,
  useNamespace,
} from '@zzui-plus/hooks'
import { inputEmits, inputProps } from './input'

type TargetElement = HTMLInputElement | HTMLTextAreaElement

defineOptions({
  name: 'ZzInput',
})

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

// init here
const input = shallowRef<HTMLInputElement>()

const _ref = computed(() => input.value)

const nsInput = useNamespace('input')

const containerKls = computed(() => [
  nsInput.b(),
  nsInput.is('disabled', props.disabled),
])
const wrapperKls = computed(() => [
  nsInput.e('wrapper'),
  nsInput.is('focus', isFocused.value),
])

const handleInput = (event: Event) => {
  const { value } = event.target as TargetElement

  if (isComposing.value) return
  emit('input', value)
}

const { isFocused, handleFocus, handleBlur } = useFocusController(_ref)

const {
  isComposing,
  handleCompositionStart,
  handleCompositionUpdate,
  handleCompositionEnd,
} = useComposition({ emit, afterComposition: handleInput })

const focus = async () => {
  await nextTick()
  _ref.value?.focus()
}

defineExpose({
  focus,
})
</script>

<template>
  <div :class="containerKls">
    <div ref="wrapperRef" :class="wrapperKls">
      <input
        ref="input"
        :class="nsInput.e('inner')"
        :disabled="disabled"
        :placeholder="placeholder"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </div>
  </div>
</template>
