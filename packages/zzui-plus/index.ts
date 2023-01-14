import installer from './defaults'
export * from '@zzui-plus/components'
export * from '@zzui-plus/hooks'
export * from '@zzui-plus/tokens'
export { makeInstaller } from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
