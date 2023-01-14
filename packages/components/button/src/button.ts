import { buildProps } from '@zzui-plus/utils'

import type { ExtractPropTypes } from 'vue'

export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  /**
   * @deprecated
   * Text type will be deprecated in the next major version (3.0.0)
   */
  'text',
  '',
] as const

export const buttonNativeTypes = ['button', 'submit', 'reset'] as const

export const buttonProps = buildProps({
  /**
   * @description button type
   */
  type: {
    type: String,
    values: buttonTypes,
    default: '',
  },
  /**
   * @description native button type
   */
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: 'button',
  },
  /**
   * @description determine whether it's a plain button
   */
  plain: Boolean,
  /**
   * @description determine whether it's a round button
   */
  round: Boolean,
  /**
   * @description determine whether it's a circle button
   */
  circle: Boolean,
  /**
   * @description custom button color, automatically calculate `hover` and `active` color
   */
  color: String,
} as const)
export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits

export type ButtonType = ButtonProps['type']
export type ButtonNativeType = ButtonProps['nativeType']
