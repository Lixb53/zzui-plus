import { buildProps, definePropType, isNumber } from '@zzui-plus/utils'
import type { ExtractPropTypes, StyleValue } from 'vue'

import type Scrollbar from './scrollbar.vue'

export const scrollbarProps = buildProps({
  /**
   * @description height of scrollbar
   */
  height: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description max height of scrollbar
   */
  maxHeight: {
    type: [String, Number],
    default: '',
  },
  wrapClass: {
    type: [String, Array],
    default: '',
  },
  wrapStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
    default: '',
  },
  /**
   * @description class of view
   */
  viewClass: {
    type: [String, Array],
    default: '',
  },
  /**
   * @description style of view
   */
  viewStyle: {
    type: [String, Array, Object],
    default: '',
  },
  native: {
    type: Boolean,
    default: false,
  },
  /**
   * @description element tag of the view
   */
  tag: {
    type: String,
    default: 'div',
  },
  always: Boolean,
  noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
  /**
   * @description 混动条的最小尺寸
   */
  minSize: {
    type: Number,
    default: 20,
  },
} as const)

export type ScrollbarProps = ExtractPropTypes<typeof scrollbarProps>

export const scrollbarEmits = {
  scroll: ({
    scrollTop,
    scrollLeft,
  }: {
    scrollTop: number
    scrollLeft: number
  }) => [scrollTop, scrollLeft].every(isNumber),
}

export type ScrollbarEmits = typeof scrollbarEmits

export type ScrollbarInstance = InstanceType<typeof Scrollbar>
