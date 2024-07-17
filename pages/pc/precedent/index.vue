<template>
  <header>
    <div class="header_bg">
    </div>
  </header>
  <div class="tittle">
    <h1>PRODUCT CASE</h1>
    <h2>产品案例</h2>
  </div>

</template>

<script lang="ts" setup>




</script>

<style lang="less" scoped>
header {
  width: 100%;
  height: 300px;
}

.header_bg {
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/product/bg.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 10% 20%;
  filter: brightness(0.8) grayscale(1);
}

.tittle {
  margin-top: 100px;

  h1,
  h2 {
    width: 100%;
    text-align: center;
    line-height: 50px;
  }
}

</style>