<script lang="ts" setup>
import { ref } from 'vue'
import { useNamespace } from '@zzui-plus/hooks'
import { buttonEmits, buttonProps } from './button'
import { useButton } from './use-button'
import { useButtonCustomStyle } from './button-custom'

defineOptions({
  name: 'ZzButton',
})

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const _ref = ref<HTMLButtonElement>()
const buttonStyle = useButtonCustomStyle(props)
const ns = useNamespace('button')

const { _type, shouldAddSpace, _disabled, _size } = useButton(props, emit)

const handleClick = () => {
  // eslint-disable-next-line no-console
  console.log(_ref.value)
}
</script>

<template>
  <button
    ref="_ref"
    :class="[
      ns.b(),
      ns.m(_type),
      ns.m(_size),
      ns.is('plain', plain),
      ns.is('round', round),
      ns.is('circle', circle),
      ns.is('disabled', disabled),
      ns.is('link', link),
      ns.is('text', text),
      ns.is('has-bg', bg),
      ns.is('loading', loading),
    ]"
    :aria-disabled="_disabled || loading"
    :disabled="_disabled || loading"
    :type="nativeType"
    :style="buttonStyle"
    @click="handleClick"
  >
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading" />
      <zz-icon v-else :class="ns.is('loading')">
        <component :is="loadingIcon" />
      </zz-icon>
    </template>
    <zz-icon v-else-if="icon || $slots.icon">
      <component :is="icon" v-if="icon" />
      <slot v-else name="icon" />
    </zz-icon>
    <span
      v-if="$slots.default"
      :class="{ [ns.em('text', 'expand')]: shouldAddSpace }"
    >
      <slot>aa</slot>
    </span>
  </button>
</template>

<style lang="scss" scoped></style>
