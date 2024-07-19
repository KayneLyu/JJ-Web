<script setup lang='ts'>
import Slider from './slider.vue';
import ProductList from './product-list.vue';
import About from './about.vue';
import Partners from './partners.vue';
definePageMeta({
   layout: 'mobile',
})
</script>

<template>
   <div class="index_container">
      <div class="banner">
         <Slider />
      </div>
      <div class="product">
         <ProductList />
      </div>

      <div class="about">
         <About />
      </div>
      <div class="partners">
         <Partners />
      </div>
   </div>
</template>

<style scoped lang="less">
.content {
   height: 500px;
}

.product, .about {
   margin-top: 30px;
}

</style>