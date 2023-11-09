import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import pages from '~pages'

export const router = createRouter({ routes: pages, history: createWebHashHistory() })

export default (app: App) => app.use(router)
