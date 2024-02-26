<script setup lang='ts'>

const props = defineProps({
    text: String,
    btnBackground: String,
    toRightBg: String,
    toTopBg: String,
    height: {
        type: Number,
        default: 70
    },
    width: {
        type: Number,
        default: 220
    },
    size:{
        type: Number,
        default: 24
    },
    color:{
        type: String,
        default: '#FFF'
    }
})

</script>

<template>
    <div>
        <button :style="{
            '--bg-color': toRightBg,
            '--bga-color': toTopBg,
            '--btn-height': `${height}px`,
            '--btn-width': `${width}px`,
            '--btn-size' : `${size}px`,
            '--btn-color' : color
        }">
            {{ props.text }}
        </button>
    </div>
</template>

<style scoped lang="less">
button {
    position: relative;
    cursor: pointer;
    // width: 220px;
    // height: 70px;
    width: var(--btn-width);
    height: var(--btn-height);
    border: 2px solid var(--btn-color);;
    border-radius: 8px;
    color: var(--btn-color);
    font-size: var(--btn-size);
    letter-spacing: 3px;
    background-color: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    z-index: 1;

    &:before,
    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 100%;
        z-index: -2;
        border-radius: 4px;
        transition: ease 0.8s;
        z-index: -1;
        background-color: var(--bg-color);
    }

    &:after {
        width: 100%;
        height: 0;
        background-color: var(--bga-color);
    }

    &:hover {
        z-index: 1;
        background: transparent;
    }

    &:hover:before {
        width: 100%;
    }

    &:hover:after {
        height: 100%;
    }
}
</style>