import { ZzButton } from '@zzui-plus/components/button'
import { ZzConfigProvider } from '@zzui-plus/components/config-provider'
import { ZzForm, ZzFormItem } from '@zzui-plus/components/form'
import { ZzIcon } from '@zzui-plus/components/icon'
import { ZzScrollbar } from '@zzui-plus/components/scrollbar'
import { ZzInput } from '@zzui-plus/components/input'

import type { Plugin } from 'vue'

export default [
  ZzButton,
  ZzConfigProvider,
  ZzInput,
  ZzForm,
  ZzFormItem,
  ZzIcon,
  ZzScrollbar,
] as unknown as Plugin[]
