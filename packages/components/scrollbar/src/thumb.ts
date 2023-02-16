import { buildProps } from '@zzui-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type Thumb from './thumb.vue'

export const thumbProps = buildProps({
  vertical: Boolean,
  always: Boolean,
  size: String,
  move: Number,

  ratio: {
    type: Number,
    required: true,
  },
} as const)

export type ThumbProps = ExtractPropTypes<typeof thumbProps>

export type ThumbInstance = InstanceType<typeof Thumb>
