import { withInstall, withNoopInstall } from '@zzui-plus/utils'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

export const ZzButton = withInstall(Button, {
  ButtonGroup,
})
export const ZzButtonGroup = withNoopInstall(ButtonGroup)
export default ZzButton

export * from './src/button'
export type { ButtonInstance, ButtonGroupInstance } from './src/instance'
