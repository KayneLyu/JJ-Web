<script setup>
import Header from './Mobile/header/index';
</script>

<template>
   <div>
      <Header />
      <slot />
   </div>
</template>

<style>
body {
   background: #f5f5f5;
}
</style>