import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import ZzuiPlus from 'zzui-plus'
import 'element-plus/dist/index.css'
import 'prismjs/themes/prism-funky.min.css'
import 'uno.css'
import { globals } from '../vitepress'

import { define } from '../utils/types'
import type { Theme } from 'vitepress'

console.log(ZzuiPlus, ElementPlus)

export default define<Theme>({
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)
    app.use(ZzuiPlus)
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
})
