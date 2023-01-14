import 'normalize.css'

import './styles/app.scss'

import VPDemo from './components/vp-demo.vue'
import type { Component } from 'vue'

export const globals: [string, Component][] = [['Demo', VPDemo]]
