<script setup lang="ts">
import Menu from './menu.vue';
import logo from '@/assets/images/logo/logo.png';

</script >

<template>
    <div class="header">
        <div class="header_content">
            <div class="logo">
                <img :src="logo" alt="金久数控">
            </div>
            <Menu></Menu>
        </div>
    </div>
</template>

<style scoped>
.header {
    position: fixed;
    top: 0;
    z-index: 9;
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: center;
    /* border-bottom: 1px solid #e6e6e6; */
    background-color: #fff;
    /* background-color: rgba(255, 255, 255, 0.7); */
}
.header_content {
    display: flex;
    width: 60%;
    justify-content: space-between;
    align-items: center;
}
.logo {
    width: 100px;
    cursor: pointer;
    img {
        width: 120px;
        height: 90%;
        object-fit: cover;
    }
}
</style>