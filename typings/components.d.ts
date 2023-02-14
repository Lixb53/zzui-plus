// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    ZzButton: typeof import('../packages/zzui-plus')['ZzButton']
  }
}

export {}
