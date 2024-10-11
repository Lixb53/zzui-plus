import { computed, ref } from 'vue'

export function useFormLabelWidth() {
  const potentialLabelWidthArr = ref<number[]>([])

  const autoLabelWidth = computed(() => {
    if (!potentialLabelWidthArr.value.length) return '0'

    const max = Math.max(...potentialLabelWidthArr.value)

    return max ? `${max}px` : ''
  })

  return {
    autoLabelWidth,
  }
}
