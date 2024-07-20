// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // modules:[
  //   '@element-plus/nuxt'
  // ],
  // css:[],
  app: {
    head: {
      charset: 'utf-8',
      viewport: "width=device-width,initial-scale=1",
      title: "东莞市金久自动化科技有限公司",
      meta: [
        {
          name: "description",
          content: "东莞市金久自动化科技有限公司是一家专注于塑料挤出领域的高科技技术型企业,致力于研发、生产和销售塑料挤出相关设备与技术解决方案。",
        },
        {
          name: "keywords",
          content: "自动风环,风环,全自动控制风环,测厚仪,金久,东莞金久,东莞市金久,金久自动化,金久塑控,称重,称重喂料,称重控制,边料机,塑料薄膜,塑胶行业,测厚仪,薄膜测厚系统",
        }
      ],
      link: [],
      script: [
        {
          type: 'text/javascript',
          src: 'https://webapi.amap.com/maps?v=2.0&key=304d08b1edca59c3c1f022a9063f0e67'
        }
      ]
    }
  },
  vite: {
    css: {
    }
  }
})
