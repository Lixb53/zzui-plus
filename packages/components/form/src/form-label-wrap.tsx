import { Fragment, defineComponent, inject, ref } from 'vue'
import { useNamespace } from '@zzui-plus/hooks'
import {
  formContextKey,
  // formItemContextKey
} from './constants'

import type { CSSProperties } from 'vue'

const COMPONEN_NAME = 'ZzLabelWrap'

export default defineComponent({
  name: COMPONEN_NAME,
  props: {
    isAutoWidth: Boolean,
  },

  setup(props, { slots }) {
    const formContext = inject(formContextKey, undefined)
    const ns = useNamespace('form')
    const el = ref<HTMLElement>()
    const computedWidth = ref(0)

    const getLabelWidth = () => {
      if (el.value?.firstElementChild) {
        const width = window.getComputedStyle(el.value.firstElementChild).width
        return Math.ceil(Number.parseFloat(width))
      } else {
        return 0
      }
    }

    return () => {
      if (!slots) return null

      const style: CSSProperties = {}

      const { isAutoWidth } = props

      if (isAutoWidth) {
        const autoLabelWidth = formContext?.autoLabelWidth
        if (autoLabelWidth && autoLabelWidth !== 'auto') {
          const marginWidth = Math.max(
            0,
            Number.parseInt(autoLabelWidth, 10) - computedWidth.value
          )

          if (marginWidth) {
            style['marginRight'] = `${marginWidth}px`
          }
        }
        return (
          <div ref={el} class={[ns.be('item', 'label-wrap')]} style={style}>
            {slots.default?.()}
          </div>
        )
      } else {
        return <Fragment ref={el}>{slots.default?.()}</Fragment>
      }
    }
  },
})
