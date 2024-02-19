<script setup lang='ts'>
import { ref } from 'vue';
import Header from '@/layouts/header/index.vue';
import feng from '@/assets/images/index/feng.png';
definePageMeta({
    layout: 'custom',
})

const scrollRef = ref<HTMLElement | null>(null)
const updateScroll = () => {
    console.log('aaaaaaaaaa', scrollRef.value!.scrollTop);
}
</script>

<template>
    <div @scroll="updateScroll" ref="scrollRef" class="container">
        <Header />
        <section>
            <div class="picture_container">
                <img :src="feng" alt="">
            </div>
        </section>
        <section style="background-color: rgb(255, 0, 51);">2</section>
        <section style="background-color: rgb(0, 34, 255);">3</section>
        <section style="background-color: rgb(255, 123, 0);">4</section>
        <section style="background-color: rgb(57, 60, 60);">5</section>
    </div>
</template>

<style scoped>
/* .menu {
    position: absolute;
    z-index: 9;
    width: 100vw;
    top: 0;
} */
.container {
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
}

section {
    width: 100vw;
    height: 100vh;
    scroll-snap-align: start;
    text-align: center;
    line-height: 100vh;
    color: #fff;
    font-size: 40px;
}

.picture_container {
    width: 100vw;
    height: 100vh;
    filter: blur(5px);
    /* filter: drop-shadow(-16px -16px 20px #fff); */
}

img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
}
</style>