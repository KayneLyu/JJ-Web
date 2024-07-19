<script setup lang='ts'>
import MarqueeComponent from '@/components/marquee.vue';
import Footer from '@/layouts/PC/footer/index.vue';

import hisense from '@/assets/images/index/logo/hi.png';
import hifill from '@/assets/images/index/logo/hifill.png';
import jinming from '@/assets/images/index/logo/jinming.png';
import hbqg from '@/assets/images/index/logo/hbqg.png';
import ztks from '@/assets/images/index/logo/ztks.png';
import nxsy from '@/assets/images/index/logo/nxsy.png';

import hq from '@/assets/images/index/logo/hq.png';
import yinfeng from '@/assets/images/index/logo/yinfeng.png';
import wl from '@/assets/images/index/logo/wl.png';
import jzy from '@/assets/images/index/logo/jzy.png';
import hs from '@/assets/images/index/logo/hs.png';
import hn from '@/assets/images/index/logo/hn.png';

import dy from '@/assets/images/index/logo/dy.png';
import bjd from '@/assets/images/index/logo/bjd.png';
import js from '@/assets/images/index/logo/js.png';
import zx from '@/assets/images/index/logo/zx.png';
import gd from '@/assets/images/index/logo/gd.png';
import jm from '@/assets/images/index/logo/jm.png';

const props = defineProps({
    section: Number
})
const logoList1 = [
    hq,
    yinfeng,
    hn,
    wl,
    jzy,
    hs
]
const logoList2 = [
    hifill,
    hisense,
    jinming,
    hbqg,
    ztks,
    nxsy
]

const logoList3 = [
    dy,
    bjd,
    js,
    zx,
    gd,
    jm
]

</script>

<template>
    <div class="fourth_section">
        <p class="tips_text">
            <h1>合作伙伴</h1>
        </p>

        <div class="marquee">
            <MarqueeComponent :duration="25">
                <div class="logo_container" v-for="(item, index) in logoList1" :key="index">
                    <div class="logo" :style="{ backgroundImage: `url(${item})` }"></div>
                </div>
            </MarqueeComponent>
            <MarqueeComponent :duration="40">
                <div class="logo_container" v-for="(item, index) in logoList2" :key="index">
                    <div class="logo" :style="{ backgroundImage: `url(${item})` }"></div>
                </div>
            </MarqueeComponent>
            <MarqueeComponent :duration="25">
                <div class="logo_container" v-for="(item, index) in logoList3" :key="index">
                    <div class="logo" :style="{ backgroundImage: `url(${item})` }"></div>
                </div>
            </MarqueeComponent>
        </div>
    </div>
</template>

<style scoped lang="less">
.fourth_section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    background-color: #ebedf0;
}

.tips_text {
    h1 {
        width: fit-content;
        font-weight: 400;
        border-bottom: 4px solid #8cbeff;
        margin: 40px auto;
    }
}

.logo_container {
    display: inline-block;
    margin: 2px 5px;
    width: 100px;
    height: 50px;
    padding: 5px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 8px;
}

.logo {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #fff;
    background-position: center;
}

.marquee {
    position: relative;
    width: 100vw;
    margin: 0 auto;

    &::before {
        content: "";
        height: 100%;
        left: -15px;
        position: absolute;
        top: -5px;
        width: 100px;
        z-index: 2;
        background-image: -webkit-linear-gradient(left, #ebedf0 20%, rgba(235, 237, 240, 0));

    }

    &::after {
        content: "";
        height: 100%;
        right: -15px;
        position: absolute;
        top: -5px;
        width: 100px;
        z-index: 2;
        background-image: -webkit-linear-gradient(right, #ebedf0 20%, rgba(235, 237, 240, 0));

    }
}

.animate_left {
    animation: from_left 1s linear;
}

.animate_top {
    animation: from_bottom 1.3s linear;
}

@keyframes from_left {
    0% {
        opacity: 0.1;
        transform: translateX(-400px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes from_bottom {
    0% {
        opacity: 0.1;
        transform: translateY(200px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>