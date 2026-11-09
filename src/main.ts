import './assets/main.css'

import { createApp, createSSRApp } from 'vue'
import App from './App.vue'

// Static production pages hydrate; the development entry renders normally.
const root = document.getElementById('app')!
;(root.children.length ? createSSRApp(App) : createApp(App)).mount(root)
