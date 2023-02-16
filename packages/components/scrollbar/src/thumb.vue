<script lang="ts" setup>
import { computed, inject, ref } from 'vue'
import { useNamespace } from '@zzui-plus/hooks'
import { scrollbarContextKey } from '@zzui-plus/tokens/scrollbar'
import { throwError } from '@zzui-plus/utils'
import { thumbProps } from './thumb'
import { BAR_MAP, renderThumbStyle } from './utils'

const COMPONENT_NAME = 'Thumb'
const props = defineProps(thumbProps)

const scrollbar = inject(scrollbarContextKey)
const ns = useNamespace('scrollbar')

if (!scrollbar) throwError(COMPONENT_NAME, 'can not inject scrollbar context')

const instance = ref<HTMLDivElement>()
const thumb = ref<HTMLDivElement>()

// const thumbState = ref<Partial<Record<'X' | 'Y', number>>>({})
const visible = ref(false)

const bar = computed(() => BAR_MAP[props.vertical ? 'vertical' : 'horizontal'])

const thumbStyle = computed(() =>
  renderThumbStyle({
    size: props.size,
    move: props.move,
    bar: bar.value,
  })
)
</script>

<template>
  <transition :name="ns.b('fade')">
    <div
      v-show="always || visible"
      ref="instance"
      :class="[ns.e('bar'), ns.is(bar.key)]"
    >
      <div ref="thumb" :class="[ns.e('thumb')]" :style="thumbStyle" />
    </div>
  </transition>
</template>
