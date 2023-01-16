import { defineComponent, renderSlot } from 'vue'
import { buildProps } from '@zzui-plus/utils'
import { useSizeProp } from '@zzui-plus/hooks'
import type { ExtractPropTypes } from 'vue'

export const configProviderProps = buildProps({
  /**
   * @description global component size
   */
  size: useSizeProp,
  /**
   * @description global Initial zIndex
   */
  zIndex: Number,
  /**
   * @description global component className prefix (cooperated with [$namespace](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1)) | ^[string]
   */
  namespace: {
    type: String,
    default: 'zz',
  },
} as const)
export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>

const configProvider = defineComponent({
  name: 'ZzConfigProvider',
  setup(props, { slots }) {
    return () => renderSlot(slots, 'default', { config: props })
  },
})

export type ConfigProviderInstance = InstanceType<typeof configProvider>

export default configProvider
