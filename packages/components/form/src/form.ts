import { buildProps, isArray, isBoolean, isString } from '@zzui-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type { FormItemProp } from './form-item'

export const formProps = buildProps({
  /**
   * @description Width of label, e.g. '50px',它的所有直接子窗体项都将继承此值。支持' auto '。
   */
  labelWidth: {
    type: [String, Number],
    default: '',
  },
})

export type FormProps = ExtractPropTypes<typeof formProps>

export const formEmits = {
  validate: (prop: FormItemProp, isValid: boolean, message: string) =>
    (isArray(prop) || isString(prop)) &&
    isBoolean(isValid) &&
    isString(message),
}
export type FormEmits = typeof formEmits
