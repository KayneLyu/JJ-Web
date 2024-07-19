<script setup>
import Header from './Mobile/header/index';
import Footer from './Mobile//footer/index';
</script>

<template>
   <div class="mobile_layouts">
      <Header />
      <slot />

      <Footer />
   </div>
</template>

<style>
body {
   background: #f5f5f5;
}
</style>