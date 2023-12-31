import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import Unocss from 'unocss/vite'
import StringFile from 'vite-plugin-string'
import WebfontDownload from 'vite-plugin-webfont-dl'
import { templateCompilerOptions } from '@tresjs/core'

export default defineConfig({
  server: {
    hmr: true,
    host: true,
    open: true,
    port: 8080,
    proxy: {},
  },

  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    // https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#readme
    Vue({
      include: [/\.vue$/],
      script: {
        defineModel: true,
        propsDestructure: true,
      },
      ...templateCompilerOptions,
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      exclude: ['**/components/*.vue'],
      extensions: ['vue'],
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
        'src/utils',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),

    StringFile({
      include: '**/*.glsl',
    }),

    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools(),

    // https://github.com/feat-agency/vite-plugin-webfont-dl
    WebfontDownload(),
  ],
})
