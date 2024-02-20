<script setup lang='ts'>
import { ref } from 'vue';
import Header from '@/layouts/header/index.vue';


type IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
) => void;

// import 'animate.css'
definePageMeta({
    layout: 'custom',
})

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
        entries.forEach((entry,index) => {
            if (entry.isIntersecting) {
                if(index == 0) {
                    upIn.value = 'animate__animated animate__bounceInRight'
                }
                const element = entry.target;
                element.classList.add("come-in");
                instance.unobserve(element);
            }
        })
    }
    const observer = new IntersectionObserver(callback,options);
    elements.forEach(ele => {
        // ele.classList.add('opaque')
        observer.observe(ele);
    })
})


</script>


<template>
    <div ref="scrollRef" class="container">
        <Header />
        <section>
            <div class="picture picture_first">
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
        height: 12px;
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
    width: 100vw;
    height: 100vh;
    scroll-snap-align: start;
    text-align: center;
    line-height: 100vh;
    color: #fff;
    font-size: 40px;


    .section_container {
        display: flex;
        align-items: center;
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
    background-image: url("@/assets/images/index/cz.png");
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
}
</style>