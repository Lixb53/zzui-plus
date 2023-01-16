import { computed, inject, useSlots } from 'vue'
import { useDisabled, useGlobalConfig, useSize } from '@zzui-plus/hooks'
import { buttonGroupContextKey } from '@zzui-plus/tokens'

import type { SetupContext } from 'vue'
import type { ButtonEmits, ButtonProps } from './button'
export const useButton = (
  props: ButtonProps,
  emit: SetupContext<ButtonEmits>['emit']
) => {
  const buttonGroupContext = inject(buttonGroupContextKey, undefined)
  const _size = useSize(computed(() => buttonGroupContext?.size))
  const _disabled = useDisabled()
  const _type = computed(() => props.type || '')
  const globalConfig = useGlobalConfig('button')
  const slots = useSlots()
  const autoInsertSpace = computed(
    () => props.autoInsertSpace ?? globalConfig.value?.autoInsertSpace ?? false
  )

  // add space between two characters in Chinese
  const shouldAddSpace = computed(() => {
    const defaultSlot = slots.default?.()
    if (autoInsertSpace.value && defaultSlot?.length === 1) {
      const slot = defaultSlot[0]
      if (slot?.type === Text) {
        const text = slot.children as string
        return /^\p{Unified_Ideograph}{2}$/u.test(text.trim())
      }
    }
    return false
  })

  const handleClick = (evt: MouseEvent) => {
    if (props.nativeType === 'reset') {
      // eslint-disable-next-line no-console
      console.log(props.nativeType)
    }
    emit('click', evt)
  }

  return {
    _disabled,
    _size,
    _type,
    handleClick,
    shouldAddSpace,
  }
}
