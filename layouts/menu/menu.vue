<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const menuList = [
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
]

const route = useRoute()

const menuIndex = ref(0)
const myRef = ref<HTMLElement | null>(null);

watch(() => route.path, (newVal,oldVal) => {
    const itemIndex = menuList.findIndex(item => {
        return newVal == item.path
    })
    console.log(newVal,oldVal,itemIndex);
    
    if(itemIndex == -1) {
        return
    }
    myRef.value!.style['left'] = itemIndex * 124 + 30 + 'px'
    menuIndex.value = itemIndex
})

const mouseOver = (index: number) => {
    myRef.value!.style['opacity'] = '1'
    myRef.value!.style['left'] = index * 124 + 30 + 'px'
}

const mouseLeave = () => {
    myRef.value!.style['left'] = menuIndex.value * 124 + 30 + 'px'
}

</script>

<template>
    <ul id="nav">
        <li class="slide1" ref="myRef"></li>
        <li v-for="(item, index ) in menuList" :key="index">
            <NuxtLink active-class="active" @mouseover="mouseOver(index)" @mouseleave="mouseLeave" :to="item.path">{{ item.name }}</NuxtLink>
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

.squeeze {
    transform: scale(0.9);
}
</style>