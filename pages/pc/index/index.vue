<script setup lang='ts'>
import { ref } from 'vue';
import PageFirst from "./first-section.vue";
import PageSecond from "./second-section.vue";
// import Header from '@/layouts/header/index.vue';
type IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
) => void;

// import 'animate.css'
// definePageMeta({
//     layout: 'custom',
// })
const scrollRef = ref<HTMLElement | null>(null)
const sectionIndex = ref(0)

onMounted(() => {
    const root = document.querySelector('.container')
    const options = {
        root,
        threshold: 0.1
    }
    const elements = document.querySelectorAll('.observer_item')
    function callback(entries: IntersectionObserverEntry[], instance: IntersectionObserver) {
        entries.forEach( entry => {
            if (entry.isIntersecting) {
                const targetElement = entry.target;
                const number = targetElement.getAttribute('dataIndex')!;
                sectionIndex.value = Number(number)
                instance.unobserve(targetElement);
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
        <!-- <Header /> -->
        <section class="section_index">
            <PageFirst />
        </section>
        <section class="observer_item" dataIndex = 1>
            <PageSecond :section = 'sectionIndex' />
        </section>
        <section class="observer_item" dataIndex = 2>

        </section>
        <section class="observer_item" dataIndex = 3>

        </section>
        <!-- <section>

        </section> -->
    </div>
</template>

<style scoped lang="less">
// @import 'animate.css';
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
    width: 100vw;
    height: 100vh;
    scroll-snap-align: start;
    text-align: center;
}

</style>