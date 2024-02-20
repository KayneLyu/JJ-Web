// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:[
    'animate.css/animate.min.css',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: "width=device-width,initial-scale=1",
      title: "东莞市金久自动化科技有限公司",
      meta: [
        {
          name: "description",
          content: "",
        },
        {
          name: "keywords",
          content: "金久,jjsk,东莞市金久,金久自动化,风环,自动风环,全自动控制风环,称重,称重喂料,称重控制,边料机,塑料薄膜,塑胶行业,测厚仪,薄膜测厚系统",
        }
      ],
      link: []
    }
  },
  vite: {
    css: {

    }
  }
})
