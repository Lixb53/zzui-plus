import { mdPlugin, nav, sidebar } from './config/index'
export default {
  title: 'zzui-plus',
  themeConfig: {
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav,
    sidebar,
  },
  markdown: {
    config: mdPlugin,
  },
}
