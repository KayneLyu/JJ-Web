<script setup lang='ts'>
import { ref } from 'vue';
import Header from '@/layouts/header/index.vue';
import cz6 from '@/assets/images/index/cz6.png';
import fh1 from '@/assets/images/index/fh1.png';
import fh2 from '@/assets/images/index/fh2.png';

type IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
) => void;

// import 'animate.css'
// definePageMeta({
//     layout: 'custom',
// })
const scrollRef = ref<HTMLElement | null>(null)
const upIn = ref('')

onMounted(() => {
    const root = document.querySelector('.container')
    const options = {
        root,
        threshold: 0
    }
    const elements = document.querySelectorAll('.picture_second')
    function callback(entries: IntersectionObserverEntry[], instance: IntersectionObserver) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                if (index == 0) {
                    upIn.value = 'animate__animated animate__bounceInRight animate__delay-2s'
                }
                const element = entry.target;
                element.classList.add("come-in");
                instance.unobserve(element);
            }
        })
    }
    const observer = new IntersectionObserver(callback, options);
    elements.forEach(ele => {
        // ele.classList.add('opaque')
        observer.observe(ele);
    })
})


</script>


<template>
    <div ref="scrollRef" class="container">
        <!-- <Header /> -->
        <section class="section_index">
            <div class="index_title">
                <p>金久为您提供塑胶成型生产整套解决方案</p>
                <div>
                    <Button>
                        了解更多 →
                    </Button>
                </div>
            </div>
            <div class="image_container">
                <img :src="fh1" alt="风环">
                <img :src="cz6" alt="风环">
                <img :src="fh2" alt="风环">
            </div>
        </section>
        <section class=".observer-item">
            <div class="section_container">
                <div :class="[upIn, 'picture picture_second']">
                </div>
            </div>
        </section>
        <section class=".observer-item">
            <div class="section_container">
                <div class="picture picture_second">
                </div>
            </div>
        </section>
        <section class=".observer-item">
            <div class="section_container">
                <div class="picture picture_second">
                </div>
            </div>
        </section>
        <section>
            <div class="section_container">
                <div class="picture picture_second">
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped lang="less">
// @import 'animate.css';

.animated {
    animation-duration: 5s;
}

.container {
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    scroll-behavior: auto;
}

.container {
    &::-webkit-scrollbar {
        width: 10px;
        // height: 12px;
        background: #f4f4f4;
    }

    &::-webkit-scrollbar-thumb {
        background: #8B8B8B;
        border-radius: 6px;
        &:hover {
            background: #6eccff;
        }
    }
}

section {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    scroll-snap-align: start;
    text-align: center;
    line-height: 100vh;
    color: #fff;
    font-size: 40px;
    background-image: linear-gradient(to bottom right, #79A9CC, #9FBBD0 50%, #E9E9E9);

    .section_container {
        display: flex;
        align-items: center;
    }


}

.section_index {
    flex-direction: column;
    justify-content: space-between;
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
    .index_title {
        width: 100%;
        height: 200px;
        line-height: 200px;
        margin-top: 8%;
        p {
            // text-align: right;
            white-space: nowrap;
            letter-spacing: 10px;
            width: 100%;
            height: 150px;
            line-height: 200px;
            font-size: 60px;
        }
        button {
            position: relative;
            cursor: pointer;
            width: 220px;
            height: 70px;
            border: 2px solid rgb(235, 235, 235,0.2);
            border-radius: 8px;
            color: #fff;
            font-size: 24px;
            letter-spacing: 3px;
            background-color: rgba(255, 255, 255, 0.1);
            overflow: hidden;
            &:before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 0;
                height: 100%;
                // background: #00d463;
                z-index:-2;
                border-radius: 4px;
                transition:0.8s;
                // background: rgb(132, 161, 255);
                z-index:-1;
                background-color: #1D1F86;
            }

            &:hover{
                z-index:1;
                background:transparent;
            }                  
            &:hover:before {
                width: 100%;
            }
        }
    }
}

.picture {
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
}


.picture_first {
    width: 90vw;
    background-image: url("@/assets/images/index/feng.png");
    box-shadow: inset 0px 60px 30px 45px #fff;
}

.picture_second {
    height: 70vh;
    // background-image: url("@/assets/images/index/cz.png");
}

.come-in {
    opacity: 1;
    transform: translateY(200px);
    animation: come-in 1.5s ease forwards;
}

.come-in:nth-child(odd) {
    animation-duration: 1s;
}

@keyframes come-in {
    100% {
        transform: translateY(0);
    }
}</style>