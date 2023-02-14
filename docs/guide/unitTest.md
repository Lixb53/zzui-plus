# 单元测试

编写单元测试是为了验证小的、独立的代码单元是否按预期工作。一个单元测试通常覆盖一个单个函数、类、组合式函数或模块。单元测试侧重于逻辑上的正确性，只关注应用整体功能的一小部分。他们可能会模拟你的应用环境的很大一部分（如初始状态、复杂的类、第三方模块和网络请求）。

一般来说，单元测试将捕获函数的业务逻辑和逻辑正确性的问题。

## 安装与配置

### 准备

- [vitest](https://cn.vitest.dev/) -  由 Vue / Vite 团队成员开发和维护。在 Vite 的项目集成它会非常简单，而且速度非常快。
- @vitejs/plugin-vue
- @vitejs/plugin-vue-jsx
- [@vue/test-utils](https://test-utils.vuejs.org/guide/#what-is-vue-test-utils) - Vue Test Utils (VTU)是一组实用函数，旨在简化Vue.js组件的测试。它提供了一些方法来以隔离的方式挂载Vue组件并与之交互。
- [@vitest/ui](https://cn.vitest.dev/guide/ui.html) - Vitest 由 Vite 提供能力，在运行测试时有一个开发服务器。这允许 Vitest 提供一个漂亮的 UI 界面来查看并与测试交互
- [jsdom](https://github.com/jsdom/jsdom/wiki/jsdom-%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3) - jsdom 是一个纯粹由 JavaScript 实现的一系列 Web 标准，特别是 WHATWG 组织制定的 DOM 和 HTML 标准，用于在 Node.js 中使用。大体上来说，该项目的目标是模拟足够的 Web 浏览器子集，以便用于测试和挖掘真实世界的 Web 应用程序
- [c8](https://github.com/bcoe/c8) - 用于展示测试覆盖率
- [unplugin-vue-macros](https://vue-macros.sxzz.moe/zh-CN/guide/getting-started.html) - Vue Macros是一个库，它实现了Vue尚未正式实现的建议或想法。这意味着它将探索和扩展更多的功能和语法糖到Vue。
- [resize-observer-polyfill](https://github.com/que-etc/resize-observer-polyfill) - ResizeObserver Polyfill 用于Resize Observer API的polyfill。 实现是基于MutationObserver的，并且如果不支持第一个事件，则将Mutation Events作为回退，因此除非DOM更改，否则不会进行轮询。

### 安装

``` sh
pnpm add vitest @vue/test-utils @vitest/ui jsdom c8 unplugin-vue-macros resize-observer-polyfill -Dw
```

### 配置

- 创建 vitest.config.ts

```ts
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'

export default defineConfig({
  plugins: [
    VueMacros({
      setupComponent: false,
      setupSFC: false,
      plugins: {
        vue: Vue(),
        vueJsx: VueJsx(),
      },
    }),
  ],
  optimizeDeps: {
    disabled: true,
  },
  test: {
    clearMocks: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})

```

- 创建 vitest.setup.ts

```ts
import { config } from '@vue/test-utils'
import { vi } from 'vitest'
import ResizeObserver from 'resize-observer-polyfill'

vi.stubGlobal('ResizeObserver', ResizeObserver)

config.global.stubs = {}

```

- 创建 tsconfig.vitest.json

```json
{
  "extends": "./tsconfig.web.json",
  "compilerOptions": {
    "composite": true,
    "lib": ["ES2021", "DOM", "DOM.Iterable"],
    "types": ["node", "jsdom", "unplugin-vue-macros/macros-global"],
    "skipLibCheck": true
  },
  "include": ["packages", "vitest.setup.ts", "typings/env.d.ts"],
  "exclude": ["node_modules", "dist", "**/*.md"]
}

```

## 进行测试

- 在 package.json 中添加脚本命令

```json
{
  "scripts": {
    "test": "vitest",
    "test:coverage": "vitest --coverage"
  }
}
```

执行pnpm run test的时候，vitest会寻找**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}形式的文件

- 创建 \_\_test\_\_ 目录, 添加 xxx.test.tsx 文件
