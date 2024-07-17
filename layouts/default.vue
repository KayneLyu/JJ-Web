<script setup>
import Header from './PC/header/index';
import Footer from './PC/footer/index';
const route = useRoute()

</script>

<template>
   <div>
      <Header />
      <div class="layout_content">

         <div class="layout_pages">
            <slot />

            <div v-if=" route.path!=='/' " class="footer_container">
               <Footer />
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped lang="less">
.layout_content {
   overflow: auto;
   height: 100vh;
   scrollbar-width: thin;
}

.layout_pages {
   display: flex;
   flex-direction: column;
   min-height: 100vh;
}

.footer_container {
   margin-top: auto;
   overflow: hidden;
}
</style>