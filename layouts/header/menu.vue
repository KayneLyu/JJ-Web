<script setup lang="ts">
const menuList = ref([
    {
        name: "金久首页",
        path: '/'
    },
    {
        name: "关于金久",
        path: '/about'
    },
    {
        name: "产品展示",
        path: '/product'
    },
    {
        name: "金久视频",
        path: '/video'
    },
    {
        name: "联系我们",
        path: '/contact'
    },
    {
        name: "产品案例",
        path: '/precedent'
    },
])
const menuIndex = ref(0)
const myRef = ref<HTMLElement | null>(null);
const hoverRef = ref<HTMLElement | null>(null);
const changeRoute = (index: number) => {
    myRef.value!.style['opacity'] = '1'
    myRef.value!.style['left'] = index * 140 + 28 + 'px'
    hoverRef.value!.style['opacity'] = '0'
    menuIndex.value = index
}

const mouseOver = (index: number) => {
    hoverRef.value!.style['opacity'] = '1'
    hoverRef.value!.style['left'] = index * 140 + 28 + 'px'
}

const mouseLeave = () => {
    hoverRef.value!.style['opacity'] = '0'
}
</script>


<template>
    <ul id="nav">
        <li class="slide1" ref="myRef"></li>
        <li class="slide2" ref="hoverRef"></li>
        <li v-for="(item, index ) in menuList" :key="index">
            <NuxtLink @mouseover="mouseOver(index)" @mouseleave="mouseLeave" @click="changeRoute(index)" :to="item.path">{{ item.name }}</NuxtLink>
        </li>
    </ul>
</template>

<style scoped>
#nav {
    position: relative;
    border: none;
    border-radius: 10em;
    display: flex;
    list-style: none;
    padding: 10px 0;
    height: 70px;
    box-sizing: border-box;
    margin: 0 200px;
}

#nav li a {
    position: relative;
    padding: 15px 30px;
    font: 300 20px '优设标题黑';
    border: none;
    outline: none;
    color: #000;
    /* color: rgb(70, 100, 180); */
    display: inline-block;
    text-decoration: none;
    z-index: 3;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.slide1,
.slide2 {
    position: absolute;
    display: inline-block;
    opacity: 0;
    /* border-radius: 10em; */
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1.05);
    width: 88px;
    height: 4px;
    bottom: 0;
}

.slide1 {
    opacity: 1;
    left: 28px;
    background-color: rgb(132, 161, 255);
    z-index: 2;
}

.slide2 {
    /* opacity: 1; */
    left: 28px;
    background-color: rgb(119, 151, 255);
    z-index: 1;
    box-shadow: 0 0 20px #ffffffaa inset;
}

.squeeze {
    transform: scale(0.9);
}
</style>