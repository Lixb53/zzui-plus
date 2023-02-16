<script lang="ts" setup>
import { computed, nextTick, onMounted, provide, reactive, ref } from 'vue'
import { useNamespace } from '@zzui-plus/hooks'
import { addUnit } from '@zzui-plus/utils'
import { scrollbarContextKey } from '@zzui-plus/tokens/scrollbar'
import Bar from './bar.vue'

import { scrollbarEmits, scrollbarProps } from './scrollbar'
import { GAP } from './utils'
import type { CSSProperties } from 'vue'
import type { BarInstance } from './bar'

defineOptions({
  name: 'ZzScrollbar',
})

const props = defineProps(scrollbarProps)
const emit = defineEmits(scrollbarEmits)

const ns = useNamespace('scrollbar')

const scrollbarRef = ref<HTMLDivElement>()
const wrapRef = ref<HTMLDivElement>()

const sizeWidth = ref('0')
const sizeHeight = ref('0')
const barRef = ref<BarInstance>()
const ratioY = ref(1)
const ratioX = ref(1)

const resizeKls = computed(() => [ns.e('view'), props.viewClass])
const wrapCls = computed(() => [
  props.wrapClass,
  ns.e('wrap'),
  { [ns.em('wrap', 'hidden-default')]: !props.native },
])

const style = computed(() => {
  const style: CSSProperties = {}
  if (props.height) style.height = addUnit(props.height)
  if (props.maxHeight) style.maxHeight = addUnit(props.maxHeight)

  return [props.wrapStyle, style]
})

const handleScroll = () => {
  if (wrapRef.value) {
    barRef.value?.handleScroll(wrapRef.value)

    emit('scroll', {
      scrollTop: wrapRef.value.scrollTop,
      scrollLeft: wrapRef.value.scrollLeft,
    })
  }
}

const update = () => {
  if (!wrapRef.value) return

  const offsetHeight = wrapRef.value.offsetHeight - GAP
  const offsetWidth = wrapRef.value.offsetWidth - GAP

  const originalHeight = offsetHeight ** 2 / wrapRef.value.scrollHeight
  const originalWidth = offsetWidth ** 2 / wrapRef.value.scrollWidth
  const height = Math.max(originalHeight, props.minSize)
  const width = Math.max(originalWidth, props.minSize)

  ratioY.value =
    originalHeight /
    (offsetHeight - originalHeight) /
    (height / (offsetHeight - height))

  ratioX.value =
    originalWidth /
    (offsetWidth - originalWidth) /
    (width / (offsetWidth - width))

  sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : ''
  sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : ''
}

onMounted(() => {
  if (!props.native) {
    nextTick(() => update())
  }
})

provide(
  scrollbarContextKey,
  reactive({
    scrollbarElement: scrollbarRef,
    wrapElement: wrapRef,
  })
)
</script>

<template>
  <div ref="scrollbarRef" :class="ns.b()">
    <div ref="wrapRef" :class="wrapCls" :style="style" @scroll="handleScroll">
      <component
        :is="tag"
        ref="resizeRef"
        :class="resizeKls"
        :style="viewStyle"
      >
        <slot />
      </component>
    </div>
    <template v-if="!native">
      <Bar
        ref="barRef"
        :height="sizeHeight"
        :width="sizeWidth"
        :always="always"
        :ratio-x="ratioX"
        :ratio-y="ratioY"
      />
    </template>
  </div>
</template>
