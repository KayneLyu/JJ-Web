<template>
    <div class="menu_container">
        <div class="menu"></div>
        <p @click="isShow = !isShow">菜单</p>
        <div class="menu_card" :style="{ height: isShow ? '300px' : 0 }">
            <ul id="nav">
                <li v-for="(item, index ) in menuList" :key="index">
                    <NuxtLink :to="item.path" @click="isShow = !isShow">
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
}

.menu_card {
    position: absolute;
    overflow: hidden;
    top: 70px;
    right: 0;
    height: 0;
    width: 100vw;
    background-color: pink;
    transition: all 0.3s ease;
}

#nav {
    width: 100%;
    height: 100%;

    li {
        text-align: left;
        width: 100%;
        height: 50px;

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
    width: 50px;
    height: 50px;
    margin-right: 20px;
    margin-top: 20px;
    position: relative;
}

.menu:before,
.menu:after {
    content: "";
    display: block;
    width: 100px;
    height: 16px;
    background: #000;
    border-radius: 8px;
    position: absolute;
    left: 0;
    -webkit-transition: all 0.15s ease-in-out;
    transition: all 0.15s ease-in-out;
}

.menu:before {
    top: 5px;
    box-shadow: 0 37px #000;
}

.menu:after {
    bottom: 5px;
}

.menu:hover:before {
    top: 42px;
    box-shadow: none;
    -webkit-transform: rotate(225deg);
    transform: rotate(225deg);
}

.menu:hover:after {
    bottom: 42px;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
}</style>