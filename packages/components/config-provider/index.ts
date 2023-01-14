import { withInstall } from '@zzui-plus/utils'
import configProvider from './src/config-provider'

export const ZzConfigProvider = withInstall(configProvider)
export default ZzConfigProvider

export * from './src/config-provider'
