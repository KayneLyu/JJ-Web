<script setup lang='ts'>
import QRcode from '@/assets/images/index/wechat_qrcode.png';
</script>

<template>
   <div class="footer_container">
      <div class="content">
         <div class="title">
            产品导航
         </div>
         <div class="content_item">
            <NuxtLink to="/">网站首页</NuxtLink>
            <NuxtLink to="/about">关于我们</NuxtLink>
            <NuxtLink to="/product">产品中心</NuxtLink>
            <NuxtLink to="/honor">公司荣誉</NuxtLink>
            <NuxtLink to="/example">产品案例</NuxtLink>
            <NuxtLink to="/contact">联系我们</NuxtLink>
         </div>
      </div>
      <div class="content content_second">
         <div class="title">
            联系我们
         </div>
         <div class="content_item ">
            <p>
               <i>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                     <path fill="currentColor"
                        d="M368 0h-224c-26.4 0-48 21.6-48 48v416c0 26.4 21.6 48 48 48h224c26.4 0 48-21.6 48-48v-416c0-26.4-21.6-48-48-48zM192 24h128v16h-128v-16zM256 480c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zM384 384h-256v-320h256v320z">
                     </path>
                  </svg>
               </i>
               张经理：13688888888
            </p>
            <p>
               <i>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                     <path fill="currentColor"
                        d="M352 320c-32 32-32 64-64 64s-64-32-96-64-64-64-64-96 32-32 64-64-64-128-96-128-96 96-96 96c0 64 65.75 193.75 128 256s192 128 256 128c0 0 96-64 96-96s-96-128-128-96z">
                     </path>
                  </svg>
               </i>
               电 {{ '&nbsp;&nbsp;' }}话：0769-22991396
            </p>
            <p>
               <i>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                     <path fill="currentColor"
                        d="M464 64h-416c-26.4 0-48 21.6-48 48v320c0 26.4 21.6 48 48 48h416c26.4 0 48-21.6 48-48v-320c0-26.4-21.6-48-48-48zM199.37 275.186l-135.37 105.446v-250.821l135.37 145.375zM88.19 128h335.62l-167.81 126-167.81-126zM204.644 280.849l51.356 55.151 51.355-55.151 105.277 135.151h-313.264l105.276-135.151zM312.63 275.186l135.37-145.375v250.821l-135.37-105.446z">
                     </path>
                  </svg>
               </i>
               邮 {{ '&nbsp;&nbsp;' }}箱：exam@jjsk.com
            </p>
            <p>
               <i>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                     <path fill="currentColor"
                        d="M272.005 512.002c-1.148 0-2.311-0.125-3.47-0.382-7.324-1.625-12.535-8.119-12.535-15.62v-240h-240c-7.501 0-13.996-5.211-15.62-12.535-1.625-7.323 2.057-14.792 8.854-17.964l480-224c6.098-2.844 13.322-1.572 18.080 3.186s6.030 11.983 3.186 18.080l-224 480c-2.671 5.72-8.386 9.235-14.495 9.235zM88.121 224h183.879c8.837 0 16 7.164 16 16v183.879l174.895-374.773-374.774 174.894z">
                     </path>
                  </svg>
               </i>
               地 {{ '&nbsp;&nbsp;' }}址：东莞市万江区新谷涌管理区<br />{{ '&nbsp;&nbsp;&nbsp;' }} 万道路合丰工业区
            </p>
         </div>
      </div>
      <div class="content">
         <div class="title">
            关注我们
         </div>
         <div class="content_item">
            <img :src="QRcode" alt="">
         </div>
      </div>
   </div>
</template>

<style scoped lang="less">
.footer_container {
   display: flex;
   justify-content: space-between;
   box-sizing: border-box;
   padding: 50px 22vw 0;
   width: 100vw;
   height: 350px;
   background-color: #1D1F86;
}

.content {
   max-width: 370px;

   .title {
      text-align: left;
      font-size: 24px;
      color: #fff;
      margin-bottom: 40px;
      letter-spacing: 3px;
      white-space: nowrap;
   }

   .content_item {
      display: flex;
      flex-wrap: wrap;

      a,
      p {
         text-decoration: none;
         cursor: pointer;
         color: #cdcdcd;
         letter-spacing: 3px;
         margin-right: 35px;
         margin-bottom: 10px;
         font-size: 20px;

         &:hover {
            color: #fff !important;
         }
      }

      p {
         margin-right: 0;
         letter-spacing: 1px;

         i {
            font-size: 22px !important;
            vertical-align: middle;
            margin-right: 5px;
         }

      }


      img {
         background-color: #fff;
         width: 120px;
         height: 120px;
         object-fit: cover;
         border-radius: 5px;
         overflow: hidden;
      }
   }
}
</style>