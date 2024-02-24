<template>
    <div class="number-counter" >{{ displayedNumber }}</div>
</template>
  
<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
    startValue: {
        type: Number,
        default: 0
    },
    endValue: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        default: 1000
    }
})
const displayedNumber = ref(props.startValue);

const animateNumber = () => {
    let startTime: number | null = null;
    const startNumber: number = props.startValue;
    const endNumber: number = props.endValue;
    const duration: number = props.duration;

    const updateNumber = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress: number = timestamp - startTime;
        displayedNumber.value = Math.floor(easeOut(progress, startNumber, endNumber - startNumber, duration));
        if (progress < duration) {
            requestAnimationFrame(updateNumber);
        } else {
            displayedNumber.value = endNumber;
        }
    };
    requestAnimationFrame(updateNumber);
};

const easeOut = (t: number, b: number, c: number, d: number): number => {
    return -c * (t /= d) * (t - 2) + b;
};

onMounted(() => {
    animateNumber();
});

watch(() => props.endValue, () => {
    setTimeout(() => {
        animateNumber();
    }, 1000);
});

</script>
  
<style scoped>
.number-counter {
    font-size: 45px;
    font-weight: bold;
    color: #fff;
}
</style>
  