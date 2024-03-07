<script setup>
import Header from './header/index';
import Footer from './footer/index';
</script>

<template>
   <div>
      <Header />
      <div class="layout_content">

         <div class="layout_footer">
            <slot />

            <Footer />
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

.layout_footer {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-top: auto;
   min-height: 100vh;
}
</style>