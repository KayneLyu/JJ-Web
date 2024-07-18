<template>
    <div class="menu_container">
        <div @click="isShow = !isShow" class="menu" :class= "{ menuToggle: isShow}"></div>
        <div class="menu_card" :style="{ height: isShow ? '310px' : 0 }">
            <ul id="nav">
                <li v-for="(item, index ) in menuList" :key="index">
                    <NuxtLink active-class="menu_active" :to="item.path" @click="isShow = !isShow">
                        {{ item.name }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang='ts' >
const isShow = ref(false)
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
</script>

<style scoped lang="less">
.menu_container {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
}

.menu_card {
    position: absolute;
    overflow: hidden;
    top: 65px;
    right: 0;
    height: 0;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.9);
    transition: all 0.2s ease;
}

.menu_active {
    color: rgb(0, 51, 255)!important;;
}
#nav {
    width: 100%;
    height: 100%;
    
    li {
        text-align: left;
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #dfdfdf;
        a {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            font: 300 16px '优设标题黑';
            outline: none;
            color: #000;
            text-decoration: none;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding-left: 20px;
            box-sizing: border-box;
        }
    }
}


.menu {
    position: relative;
    width: 40px;
    height:35px;
    margin-right: 10px;
    border: 1px solid #dfdfdf;
    border-radius: 5px;
}

.menu:before,
.menu:after {
    content: "";
    display: block;
    width: 20px;
    height: 1px;
    background: #000;
    border-radius: 8px;
    position: absolute;
    left: 10px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

.menu:before {
    top: 12px;
    box-shadow: 0 6px #000;
}

.menu:after {
    top:24px;
}

.menuToggle:before {
    top: 18px;
    box-shadow: none;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.menuToggle:after {
    top: 18px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}</style>