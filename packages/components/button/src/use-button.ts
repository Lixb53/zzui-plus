import { computed } from 'vue'

import type { SetupContext } from 'vue'
import type { ButtonEmits, ButtonProps } from './button'
export const useButton = (
  props: ButtonProps,
  emit: SetupContext<ButtonEmits>['emit']
) => {
  const _type = computed(() => props.type || '')

  const handleClick = (evt: MouseEvent) => {
    if (props.nativeType === 'reset') {
      // eslint-disable-next-line no-console
      console.log(props.nativeType)
    }
    emit('click', evt)
  }

  return {
    _type,
    handleClick,
  }
}
