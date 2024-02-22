<script setup lang='ts'>
import { useTransition } from '@vueuse/core'
const source = ref(0)
const outputValue = useTransition(source, {
    duration: 1500,
})

const props = defineProps({
    section: Number
})

watch(() => props.section, (newValue) => {
    if (newValue == 1) {
        source.value = 20
    }
})
</script>

<template>
    <div class="second_section">
        <div class="title">
            <p class="title_text"><span>“</span> 核心产品</p>
            <div class="introduce">
                <p>
                    <client-only>
                        <el-statistic value-style="font-size:50px;color:red" title="" :value="outputValue" />
                    </client-only>
                </p>
                <p>
                </p>
                <p></p>
                <p></p>
            </div>
        </div>
        <ul>
            <li>
                <img src="@/assets/images/index/air_ring.png" alt="">
            </li>
            <li>
                <img src="@/assets/images/index/air_ring.png" alt="">
            </li>
            <li>
                <img src="@/assets/images/index/air_ring.png" alt="">
            </li>
            <li>
                <img src="@/assets/images/index/air_ring.png" alt="">
            </li>
        </ul>
    </div>
</template>

<style scoped lang="less">
.second_section {
    width: 100%;
    display: flex;
    flex-direction: column;

    .title {
        margin-top: 50px;
        height: 500px;
        background-image: url('@/assets/images/index/bg01.jpg');
        background-repeat: no-repeat;
        background-size: cover;

        .title_text {
            margin-top: 150px;
            margin-left: 20%;
            text-align: left;
            letter-spacing: 3px;
            color: black;
            height: 100px;
            line-height: 100px;
            font-family: "Arial", "syht";
            font-size: 52px;
            font-weight: 600;

            span {
                color: red;
            }
        }

        .introduce {
            display: flex;
            justify-content: center;

            p {}
        }


    }

}

.test {
    font-size: 50px !important;
}

ul {
    flex: 1;
    margin-top: 20px;
    width: 100%;
    padding: 0 300px;
    box-sizing: border-box;
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #b4b4b4;
}
</style>