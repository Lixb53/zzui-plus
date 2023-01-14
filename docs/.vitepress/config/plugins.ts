// ref https://github.com/vuejs/vitepress/blob/main/src/node/markdown/plugins/highlight.ts
// 参考 https://juejin.cn/post/7136897259530256397
import path from 'path'
import fs from 'fs'
import mdContainer from 'markdown-it-container'
import { highlight } from '../utils/highlight'

// 配置
export const mdPlugin = (md) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        // 取出:::demo 后面的配置，即源码路径
        const sourceFile = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        // 源码文件路径
        const filePath = path.resolve(
          process.cwd(),
          'component',
          `${sourceFile}.vue`
        )
        let source = ''
        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(filePath, 'utf-8')
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)
        return `<Demo source="${encodeURIComponent(
          highlight(source, 'vue')
        )}" raw-source="${encodeURIComponent(source)}" >`
      } else {
        return '</Demo>'
      }
    },
  })
}
