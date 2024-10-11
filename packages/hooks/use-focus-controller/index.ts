import { getCurrentInstance, ref, shallowRef } from 'vue'
import { isFunction } from '@zzui-plus/utils'
import type { ShallowRef } from 'vue'

interface UseFocusControllerOptions {
  afterFocus?: () => void
  beforeBlur?: (event: FocusEvent) => boolean | undefined
  afterBlur?: () => void
}

export function useFocusController<T extends { focus: () => void }>(
  target: ShallowRef<T | undefined>,
  { afterFocus, beforeBlur, afterBlur }: UseFocusControllerOptions = {}
) {
  const instance = getCurrentInstance()!
  const { emit } = instance
  const wrapperRef = shallowRef<HTMLElement>()
  const isFocused = ref(false)

  const handleFocus = (event: FocusEvent) => {
    if (isFocused.value) return
    isFocused.value = true
    emit('focus', event)
    afterFocus?.()
  }

  const handleBlur = (event: FocusEvent) => {
    const cancelBlur = isFunction(beforeBlur) ? beforeBlur(event) : false
    if (
      cancelBlur ||
      (event.relatedTarget &&
        wrapperRef.value?.contains(event.relatedTarget as Node))
    )
      return

    isFocused.value = false
    emit('blur', event)
    afterBlur?.()
  }

  return {
    isFocused,
    handleFocus,
    handleBlur,
  }
}
