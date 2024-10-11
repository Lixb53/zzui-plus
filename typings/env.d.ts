import type { VNode } from 'vue'
import type { INSTALLED_KEY } from '@zzui-plus/constants'

declare type VueNode = VNode

declare global {
  const process: {
    env: {
      NODE_ENV: string
    }
  }

  namespace JSX {
    interface IntrinsicAttributes {
      class?: any
      style?: any
    }
    interface IntrinsicElements {
      [elem: string]: unknown
    }
  }
}

declare module '@vue/runtime-core' {
  export interface App {
    [INSTALLED_KEY]?: boolean
  }
  export interface GlobalComponent {
    Component: (props: { is: Component | string }) => void
  }
  export interface ComponentCustomProperties {
    vShow: typeof vShow
  }
}

export {}
