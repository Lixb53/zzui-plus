import 'normalize.css'

// fro dev
// reset
import '../../../packages/theme-chalk/src/reset.scss'
import '../../../packages/theme-chalk/src/index.scss'

// for dark mode
import '../../../packages/theme-chalk/src/dark/css-vars.scss'

import 'uno.css'

import './styles/app.scss'

import VPDemo from './components/vp-demo.vue'
import type { Component } from 'vue'

export const globals: [string, Component][] = [['Demo', VPDemo]]
