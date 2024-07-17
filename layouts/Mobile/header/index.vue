<script setup lang="ts">
import logo from '@/assets/images/logo/logo.png';
import Menu from './menu.vue';

const router = useRouter()
const backHome = () => {
    router.push('/')
}
</script >

<template>
    <div class="header_content">
        <div class="logo" @click="backHome">
            <img :src="logo" alt="金久数控">
        </div>
        <div class="header_menu">
            <Menu />
        </div>
    </div>
    <!-- </div> -->
</template>

<style scoped lang="less">
.header_content {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    z-index: 9;
    width: 100%;
    height: 70px;
    line-height: 70px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 8px rgb(229 229 229 / 50%);

    text-wrap: nowrap;
    .header_menu {
        display: inline-flex;
    }

}

.logo {
    display: inline-block;
    height: 60px;
    margin-left: 10px;
    // width: 100px;
    cursor: pointer;
    img {
        height: 90%;
        object-fit: cover;
    }
}
</style>