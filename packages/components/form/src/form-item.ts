import { buildProps, definePropType } from '@zzui-plus/utils'
import type { ExtractPropTypes } from 'vue'

import type { Arrayable } from '@zzui-plus/utils'

export type FormItemProp = Arrayable<string>

export const formItemProps = buildProps({
  label: String,
  /**
   * @description 标签宽度, e.g. `'50px'`, `'auto'` is supported
   */
  labelWidth: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description  A key of `model`. It could be an array of property paths (e.g `['a', 'b', '0']`). In the use of `validate` and `resetFields` method, the attribute is required.
   */
  prop: {
    type: definePropType<FormItemProp>([String, Array]),
  },
} as const)

export type FormItemProps = ExtractPropTypes<typeof formItemProps>
