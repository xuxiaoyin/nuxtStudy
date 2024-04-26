// https://nuxt.com/docs/api/configuration/nuxt-config
import  { resolve } from 'path';
export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, "/")
  },
  css: ["~/assets/main.scss"],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [ { src: 'https://res.zvo.cn/translate/translate.js'}]
    },
    pageTransition: { name: 'page', mode: 'out-in'}
  },
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *;'
        }
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
