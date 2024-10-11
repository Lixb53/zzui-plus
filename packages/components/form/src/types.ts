import type { ComponentSize } from '@zzui-plus/constants'
import type {
  SetupContext,
  // UnwrapRef
} from 'vue'
import type { FormEmits, FormProps } from './form'
import type { FormItemProps } from './form-item'

export type FormContext = FormProps & {
  emit: SetupContext<FormEmits>['emit']
}

export interface FormItemContext extends FormItemProps {
  $el: HTMLDivElement | undefined
  size: ComponentSize
  isGroup: boolean
  labelId: string
  inputIds: string[]
  hasLabel: boolean
  fieldValue: any
}
