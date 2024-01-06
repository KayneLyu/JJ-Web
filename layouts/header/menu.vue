<script setup lang="ts">
const menuList = ref([
    {
        name: "金久首页",
        path: '/'
    },
    {
        name: "走进金久",
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
        path: '/examples'
    },
])
const myRef = ref<HTMLElement | null>(null);
const mouseOver = (e: MouseEvent) => {
    console.log(e);
    
}

// $("#nav a").on("click", function () {
//     var position = $(this).parent().position();
//     var width = $(this).parent().width();
//     $("#nav .slide1").css({ opacity: 1, left: +position.left, width: width });
// });
// $("#nav a").on("mouseover", function () {
//     var position = $(this).parent().position();
//     var width = $(this).parent().width();
//     $("#nav .slide2").css({ opacity: 1, left: +position.left, width: width }).addClass("squeeze");
// });
// $("#nav a").on("mouseout", function () {
//     $("#nav .slide2").css({ opacity: 0 }).removeClass("squeeze");
// });
// var currentWidth = $("#nav li:nth-of-type(3) a").parent("li").width();
// var current = $("li:nth-of-type(3) a").position();
// $("#nav .slide1").css({ left: +current.left, width: currentWidth }); 


</script>


<template>
    <ul id="nav">
        <li class="slide1"></li>
        <li class="slide2"></li>
        <li v-for="(item, index ) in menuList" :key="index">
            <NuxtLink activeClass="active" ref="myRef" @mouseover="mouseOver" :to="item.path">{{ item.name }}</NuxtLink>
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
    background: #f5f5f5;
    box-shadow: 20px 40px 40px #00000033;
    padding: 10px;
}

#nav li a {
    position: relative;
    padding: 15px 50px;
    font: 500 24px '优设标题黑';
    border: none;
    outline: none;
    color: rgb(70, 100, 180);
    display: inline-block;
    text-decoration: none;
    z-index: 3;
}

.slide1,.slide2 {
    position: absolute;
    display: inline-block;
    height: 60px;
    border-radius: 10em;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1.05);
}

.slide1 {
    left: 80px;
    /* opacity: 1; */
    background-color: rgb(170, 190, 255);
    z-index: 2;
}

.slide2 {
    opacity: 0;
    background-color: rgba(170, 190, 255, .5);
    z-index: 1;
    box-shadow: 0 0 20px #ffffffaa inset;
}

.squeeze {
    transform: scale(0.9);
}</style>