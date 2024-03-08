<script setup>
import Header from './header/index';
import Footer from './footer/index';
</script>

<template>
   <div>
      <Header />
      <div class="layout_content">

         <div class="layout_pages">
            <slot />

            <div class="footer_container">
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
}
</style>