// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    ZzButton: typeof import('../packages/zzui-plus')['ZzButton']
    ZzIcon: typeof import('../packages/zzui-plus')['ZzIcon']
    ZzScrollbar: typeof import('../packages/zzui-plus')['ZzScrollbar']
  }
}

declare module 'zzui-plus' {
  const content: any
  export = content
}

export {}
