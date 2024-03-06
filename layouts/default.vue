<script setup>
import Header from './header/index';
import Footer from './footer/index';
</script>

<template>
   <div class="layout">
      <Header />
      <slot />

      <div class="layout_footer">
         <Footer />
      </div>
   </div>
</template>

<style scoped lang="less">
.layout {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 100%;
   min-height: 100vh;
}

</style>