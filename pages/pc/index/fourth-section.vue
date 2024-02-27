<script setup lang='ts'>
import MarqueeComponent from '@/components/marquee.vue';
import Footer from '@/layouts/footer/footer.vue';

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
        <div class="title">
            <p class="title_text" :class="{ 'animate_left': props.section! >= 4 }"><span>“</span> 携手共进</p>
            <!-- <p class="title_text title_info" :class="{ 'animate_top': props.section! >= 3 }">金久自动化，引领智能化时代潮流</p> -->
            <p class="title_text title_info" :class="{ 'animate_top': props.section! >= 4 }">感恩有你，我们的合作伙伴，共创美好未来。</p>
        </div>
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

        <div class="footer_container">
            <Footer />
        </div>
    </div>
</template>

<style scoped lang="less">
.fourth_section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    background-color: #ebedf0;
}

.title {
    margin-top: 13vh;
    // height: 200px;

    .title_text {
        text-align: left;
        margin-left: 25vw;
        letter-spacing: 3px;
        color: black;
        height: 60px;
        line-height: 60px;
        font-family: "Arial", "syht";
        font-size: 52px;
        font-weight: 600;

        span {
            color: red;
        }
    }

    .title_info {
        font-weight: 400;
        margin-left: 27vw;
        height: 16px;
        font-size: 16px;
        margin-top: 15px;
        line-height: 16px;
    }
}

.logo_container {
    display: inline-block;
    margin: 10px;
    width: 200px;
    height: 100px;
    padding: 20px 20px;
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
    margin: 0 auto;
    max-width: 1200px;
    min-width: 500px;
    &::before {
        content: "";
        height: 100%;
        left: -15px;
        position: absolute;
        top: -10px;
        width: 100px;
        z-index: 2;
        background-image: -webkit-linear-gradient(left, #ebedf0 20%, rgba(235, 237, 240, 0));

    }

    &::after {
        content: "";
        height: 100%;
        right: -15px;
        position: absolute;
        top: -10px;
        width: 100px;
        z-index: 2;
        background-image: -webkit-linear-gradient(right, #ebedf0 20%, rgba(235, 237, 240, 0));

    }
}

.animate_left {
    animation: from_left 1s linear;
}
.animate_top {
    animation: from_bottom 1s linear;
}

@keyframes from_left {
    0% {
        opacity: 0.1;
        transform: translateX(-100px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
@keyframes from_bottom {
    0% {
        opacity: 0.1;
        transform: translateY(100px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

</style>