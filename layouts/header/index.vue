<script setup lang="ts">
import Menu from './menu.vue';
import logo from '@/assets/images/logo/logo.png';

</script >

<template>
    <div class="header_content">
        <div class="logo">
            <img :src="logo" alt="金久数控">

        </div>
        <div class="header_menu">
            <Menu></Menu>
        </div>
    </div>
    <!-- </div> -->
</template>

<style scoped>
.header {
    position: fixed;
    width: 100%;
    height: 70px;

}

.header_content {
    position: fixed;
    top: 0;
    z-index: 9;
    display: block;
    width: 100%;
    height: 70px;
    line-height: 70px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.9);
    text-wrap: nowrap;
    .header_menu {
        display: inline-flex;
    }

}

.logo {
    display: inline-block;
    height: 70px;
    vertical-align: middle;
    width: 100px;
    cursor: pointer;
    margin-right: 160px;
    img {
        width: 120px;
        height: 90%;
        object-fit: cover;
    }
}
</style>