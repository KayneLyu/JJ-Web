<script setup lang='ts'>
import Button from '@/components/button.vue';
import indexVideo from '@/assets/video/index_video.mp4';

const props = defineProps({
    section: Number
})

</script>

<template>
    <div class="index_container">
        <div class="index_content">
            <div>
                <p :class="{ 'animate_style': props.section! >= 1 }">金久为您提供塑胶成型辅助生产设备</p>
                <a href="#product" class="button_box" :class="{ 'animate_button': props.section! >= 1 }">
                    <Button text="了解更多 →" toRightBg="#1D1F86" />
                </a>
            </div>

            <div class="arrow_box">
                <div class="arrow_tittle">滑动浏览更多</div>
                <div class="home_arrow arrow1"></div>
                <div class="home_arrow arrow2"></div>
                <div class="home_arrow arrow3"></div>
            </div>
        </div>

        <video id="video-background" autoplay loop muted>
            <source :src="indexVideo" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</template>

<style scoped lang="less">
.index_container {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    // background-image: linear-gradient(to bottom right, #79A9CC, #9FBBD0 50%, #E9E9E9);
    background-color: #000;
    overflow: hidden;

    #video-background {
        height: 100vh;
        width: 100%;
        object-fit: cover;
    }

    .index_content {
        position: absolute;
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
        z-index: 2;
        width: 100%;
        height: 100%;
        line-height: 200px;
        color: #fff;
        font-size: 40px;
        background-color: rgba(0, 0, 0, 0.5);

        p {
            margin-top: 25vh;
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
            display: block;
            opacity: 0;
        }
    }


    .arrow_box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-bottom: 60px;
        .arrow_tittle {
            height: 30px;
            line-height: 30px;
            font-size: 18px;
            margin-bottom: 15px;
            opacity: 0.8;
        }

        .home_arrow {
            width: 1.2vw;
            height: 1.2vw;
            border-left: 1px solid #fff;
            border-bottom: 1px solid #fff;
            transform: rotate(-45deg);
            margin-top: -0.8vw;
        }

        .arrow1 {
            animation: arrow_animate 1s linear infinite;
        }

        .arrow2 {
            animation: arrow2_animate 1s linear infinite;
        }

        .arrow3 {
            animation: arrow3_animate 1s linear infinite;
        }
    }

    // .image_container {
    //     display: flex;
    //     box-sizing: border-box;
    //     width: 100vw;
    //     justify-content: space-around;
    //     align-items: center;
    //     padding: 100px;

    //     video {
    //         width: 100%;
    //         height: 100%;
    //     }

    //     img {
    //         width: 500px;
    //         height: 500px;
    //         object-fit: contain;
    //     }
    // }
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
}

@keyframes arrow_animate {
    0% {
        opacity: 0.9;
        transform: translateY(0) rotate(-45deg);
    }

    100% {
        opacity: 0.6;
        transform: translateY(10px) rotate(-45deg);
    }
}

@keyframes arrow2_animate {
    0% {
        opacity: 0.6;
        transform: translateY(0) rotate(-45deg);
    }

    100% {
        opacity: 0.3;
        transform: translateY(10px) rotate(-45deg);
    }
}

@keyframes arrow3_animate {
    0% {
        opacity: 0.3;
        transform: translateY(0) rotate(-45deg);
    }

    100% {
        opacity: 0;
        transform: translateY(10px) rotate(-45deg);
    }
}
</style>