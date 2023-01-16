import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  storageKey: 'zz-theme-appearance',
})

export const toggleDark = useToggle(isDark)
