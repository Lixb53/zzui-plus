import { mdPlugin, nav, sidebar } from './config/index'
export default {
  title: 'zzui-plus',
  themeConfig: {
    siteTitle: 'zzui-plus',
    nav,
    sidebar,
  },
  markdown: {
    config: mdPlugin,
  },
}
