declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    ZzButton: typeof import('./packages/zzui-plus')['ZzButton']
    ZzIcon: typeof import('./packages/zzui-plus')['ZzIcon']
  }
}
