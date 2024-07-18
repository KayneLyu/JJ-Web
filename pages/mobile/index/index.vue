<script setup lang='ts'>
import product from '@/assets/mobile/index/index_1.webp';
definePageMeta({
   layout: 'mobile',
})
</script>

<template>
   <div class="index_container">
      <div class="header_img">
         <img :src="product" alt="">
      </div>

      <div class="product_center">
         <h1>产品中心</h1>
         <div class="product_tips">
            <p></p>
            <p class="tips_text">掌握核心技术</p>
            <p></p>
         </div>
         <ul class="product_list">

         </ul>
      </div>

      
   </div>
</template>

<style scoped lang="less">
// .index_container {

// }

.header_img {
   width: 100vw;

   img {
      width: 100%;
      object-fit: cover;
      filter: brightness(0.6);
   }
}

.content {
   height: 500px;
}

.product_center {
   margin-top: 30px;
   h1 {
      // font-size: 34px;
      letter-spacing: 2px;
      font-weight: 400;
      text-align: center;
   }
   .product_tips {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 5px;
      p {
         height: 1px;
         width: 20px;
         color: #909090;
         background-color: #909090;
      }
      .tips_text {
         margin: 0 10px;
         height: 20px;
         font-size: 14px;
         line-height: 20px;
         width: auto;
         background-color: unset;
      }
   }
}</style>