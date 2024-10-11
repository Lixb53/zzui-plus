import { isString } from '@vue/shared'
import { buildProps } from '@zzui-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type Input from './input.vue'

export const inputProps = buildProps({
  /**
   * @description disabled
   */
  disabled: {
    type: Boolean,
  },
  /**
   * @description placeholder
   */
  placeholder: {
    type: String,
  },
})

export type InputProps = ExtractPropTypes<typeof inputProps>

export const inputEmits = {
  input: (value: string) => isString(value),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  change: (value: string) => isString(value),
  compositionstart: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionupdate: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionend: (evt: CompositionEvent) => evt instanceof CompositionEvent,
}
export type InputEmits = typeof inputEmits

export type InputInstance = InstanceType<typeof Input>
