import { withInstall, withNoopInstall } from '@zzui-plus/utils'
import Form from './src/form.vue'
import FormItem from './src/form-item.vue'

export const ZzForm = withInstall(Form, {
  FormItem,
})
export default ZzForm
export const ZzFormItem = withNoopInstall(FormItem)

export * from './src/form'
export * from './src/form-item'
export * from './src/types'
export * from './src/constants'

export type FormInstance = InstanceType<typeof Form>
export type FormItemInstance = InstanceType<typeof FormItem>
