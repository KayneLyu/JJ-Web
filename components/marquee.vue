

<template>
    <div class="marquee_container">
        <div class="marquee_content" :style="{ animationDuration: `${duration}s` }">
            <slot> </slot>
        </div>
        <div class="marquee_content" :style="{ animationDuration: `${duration}s` }">
            <slot> </slot>
        </div>
    </div>
</template>

<script setup lang='ts'>
const props = defineProps({
    duration: {
        type: Number,
        default: 3
    }
})

</script>


<style scoped lang="less">
.marquee_container {
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    &:hover .marquee_content {
        animation-play-state: paused;
    }
}

.marquee_content {
    animation: marquee 2s linear infinite;
}

@keyframes marquee {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}
</style>