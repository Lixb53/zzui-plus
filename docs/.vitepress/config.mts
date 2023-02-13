import {
  REPO_BRANCH,
  REPO_PATH,
} from '../../internal/build-constants/src/index'
import { docsDirName } from '../../internal/build-utils/src/index'
import { mdPlugin, nav, sidebar } from './config/index'
export default {
  base: process.env.NODE_ENV === 'production' ? '/zzui-plus/' : '/',
  title: 'zzui-plus',
  appearance: true,
  themeConfig: {
    repo: REPO_PATH,
    docsBranch: REPO_BRANCH,
    docsDir: docsDirName,

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
