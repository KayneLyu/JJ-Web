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
        name: "公司荣誉",
        path: '/honor'
    },
    {
        name: "产品案例",
        path: '/precedent'
    },
    {
        name: "联系我们",
        path: '/contact'
    },
])
const menuIndex = ref(0)
const myRef = ref<HTMLElement | null>(null);
// const hoverRef = ref<HTMLElement | null>(null);
const changeRoute = (index: number) => {
    myRef.value!.style['left'] = index * 124 + 30 + 'px'
    menuIndex.value = index
}

const mouseOver = (index: number) => {
    myRef.value!.style['opacity'] = '1'
    myRef.value!.style['left'] = index * 124 + 30 + 'px'
}

const mouseLeave = (index:number) => {
    myRef.value!.style['left'] = menuIndex.value * 124 + 30 + 'px'
}
</script>


<template>
    <ul id="nav">
        <li class="slide1" ref="myRef"></li>
        <!-- <li class="slide2" ref="hoverRef"></li> -->
        <li v-for="(item, index ) in menuList" :key="index">
            <NuxtLink active-class="active" @mouseover="mouseOver(index)" @mouseleave="mouseLeave(index)" @click="changeRoute(index)" :to="item.path">{{ item.name }}</NuxtLink>
        </li>
    </ul>
</template>

<style scoped lang="less">
#nav {
    position: relative;
    border: none;
    border-radius: 10em;
    display: flex;
    list-style: none;
    height: 70px;
    box-sizing: border-box;
}

#nav li a {
    display: inline-block;
    font: 300 16px '优设标题黑';
    border: none;
    outline: none;
    color: #000;
    text-decoration: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 70px;
    line-height: 70px;
    padding: 0 30px; 
    box-sizing: border-box;
    &:hover {
        color: rgb(132, 161, 255);
    }
}

.slide1,
.slide2 {
    position: absolute;
    display: inline-block;
    opacity: 0;
    transition: all 1s cubic-bezier(0.23, 1, 0.32, 1.05);
    width: 64px;
    height: 4px;
    bottom: 0;
}

.slide1 {
    opacity: 1;
    left: 30px;
    background-color: rgb(132, 161, 255);
    z-index: 2;
}

.active {
    color: rgb(132, 161, 255) !important;
}

/* .slide2 {
    left: 28px;
    background-color: rgb(119, 151, 255);
    z-index: 1;
    box-shadow: 0 0 20px #ffffffaa inset;
} */

.squeeze {
    transform: scale(0.9);
}
</style>