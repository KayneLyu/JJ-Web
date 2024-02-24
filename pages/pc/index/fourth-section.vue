<script setup lang='ts'>
import MarqueeComponent from '@/components/marquee.vue';
const props = defineProps({
    section: Number
})


</script>

<template>
    <div class="fourth_section">
        <div class="title">
            <p class="title_text" :class="{ 'animate_top': props.section! >= 3 }"><span>“</span> 携手共进</p>
            <p class="title_text title_info" :class="{ 'animate_top': props.section! >= 3 }">金久自动化，引领智能化时代潮流</p>
        </div>
        <div class="marquee">
            <MarqueeComponent :duration="6">
                <div class="logo">1</div>
                <div class="logo">2</div>
                <div class="logo">3</div>
                <div class="logo">3</div>
                <div class="logo">3</div>
            </MarqueeComponent>
        </div>
    </div>
</template>

<style scoped lang="less">
.fourth_section {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #ebedf0;
    // background-image: url('@/assets/images/index/index-point.png');
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: 100% 10%;
}

.title {
    margin-top: 13vh;
    height: 500px;

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

.logo {
    display: inline-block;
    margin: 10px;
    width: 200px;
    height: 100px;
    // background-color: red;
    background-image: url('@/assets/images/index/kk.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #fff;
}

.marquee {
    margin: 0 auto;
    width: 800px;
    position: relative;

    &::before {
        content: "";
        height: 120%;
        left: -15px;
        position: absolute;
        top: -10px;
        width: 100px;
        z-index: 2;
        background-image: -webkit-linear-gradient(left, #ebedf0 20%, rgba(235, 237, 240, 0));

    }

    &::after {
        content: "";
        height: 120%;
        right: -15px;
        position: absolute;
        top: -10px;
        width: 100px;
        z-index: 2;
        background-image: -webkit-linear-gradient(right, #ebedf0 20%, rgba(235, 237, 240, 0));

    }
}
</style>