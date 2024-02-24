<script setup lang='ts'>
import cz6 from '@/assets/images/index/cz6.png';
import fh1 from '@/assets/images/index/fh1.png';
import fh2 from '@/assets/images/index/fh2.png';
import Button from '@/components/button.vue';

const props = defineProps({
    section: Number
})

</script>

<template>
    <div class="index_container">
        <div class="index_title">
            <p :class="{ 'animate_style': props.section! >= 1 }">金久为您提供塑胶成型辅助生产设备</p>
            <div class="button_box" :class="{ 'animate_button': props.section! >= 1}">
                <Button text="了解更多 →" toRightBg="#1D1F86" />
            </div>
        </div>
        <div class="image_container">
            <img :src="fh1" alt="风环">
            <img :src="cz6" alt="风环">
            <img :src="fh2" alt="风环">
        </div>
    </div>
</template>

<style scoped lang="less">
.index_container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom right, #79A9CC, #9FBBD0 50%, #E9E9E9);
    overflow: hidden;
    .index_title {

        width: 100%;
        height: 200px;
        line-height: 200px;
        margin-top: 10vh;
        color: #fff;
        font-size: 40px;

        p {
            opacity: 0;
            cursor: pointer;
            white-space: nowrap;
            letter-spacing: 8px;
            width: 100%;
            height: 150px;
            line-height: 200px;
            font-size: 60px;
        }
        .button_box {
            opacity: 0;
        }
    }

    .image_container {
        display: flex;
        box-sizing: border-box;
        width: 100vw;
        justify-content: space-around;
        align-items: center;
        padding: 100px;

        img {
            width: 500px;
            height: 500px;
            object-fit: contain;
        }
    }
}

.animate_style {
    animation: filter_animate 0.5s linear forwards;
}

.animate_button {
    animation: opacity_animate 0.8s linear forwards;
}

@keyframes filter_animate {
    0% {
        filter: blur(8px);
        letter-spacing: -60px;
    }

    100% {
        filter: blur(0);
        letter-spacing: 8px;
        opacity: 1;
    }
}

@keyframes opacity_animate {
    0% {
        opacity: 0;
        scale: 0.7;
        transform: translateY(100px);
    }

    100% {
        opacity: 1;
        scale: 1;
        transform: translateY(0);
    }
}</style>