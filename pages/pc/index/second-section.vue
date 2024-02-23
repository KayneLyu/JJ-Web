<script setup lang='ts'>
import { useTransition } from '@vueuse/core'
import Button from '@/components/button.vue';

import airRing from "@/assets/images/index/air_ring.png";
import singleMixin from "@/assets/images/index/dsz.png";
import cz6 from '@/assets/images/index/cz6.png';

const productList = ref([
    {
        name: '自动风环',
        info: '',
        src: airRing
    },
    {
        name: '称重配料',
        info: '',
        src: cz6
    },
    {
        name: '单失重',
        info: '',
        src: singleMixin
    },
    {
        name: '边料回收',
        info: '',
        src: airRing
    },
    {
        name: '自动风环',
        info: '',
        src: airRing
    },
    {
        name: '自动风环',
        info: '',
        src: airRing
    },
])

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
            <p class="title_text title_info">为客户提供专业化、高性能的专用设备</p>
            <div class="introduce">
                <!-- <p>
                    <client-only>
                        <el-statistic value-style="font-size:50px;color:red;font-weight: 700" title="" :value="outputValue" />
                    </client-only>
                </p> -->
            </div>
        </div>
        <ul>
            <li v-for="(item, index ) in productList" :key="index">
                <div class="img_container">
                    <img :src="item.src" alt="">
                </div>
                <div class="img_info">
                    <p>{{ item.name }}</p>
                    <div>
                        <Button :width="150" :height="50" text="更多 →" toTopBg="red" />
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="less">
.second_section {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-image: url('@/assets/images/index/bg01.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 100% 10%;
    .title {
        margin-top: 50px;
        height: 500px;
        

        .title_text {
            margin-top: 130px;
            margin-left: 25vw;
            text-align: left;
            letter-spacing: 3px;
            color: black;
            height: 60px;
            line-height: 60px;
            font-family: "Arial", "syht";
            font-size: 52px;
            font-weight: 600;
            span {
                color: red;
            }
        }
        .title_info {
            font-weight: 400;
            margin-left: 27vw;
            height: 16px;
            font-size: 16px;
            margin-top: 15px;
            line-height: 16px;
        }
    }
}

.test {
    font-size: 50px !important;
}

ul {
    height: 70vh;
    width: 100vw;
    padding: 0 25vw;
    box-sizing: border-box;
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 50px;
    // background-color: #b4b4b4;
    li {
        position: relative;
        cursor: pointer;
        background-color: rgba(250, 250, 250,.8);
        height: 48%;
        width: 32%;
        border-radius: 8px;
        overflow: hidden;

        .img_info {
            position: absolute;
            background-color: rgba(29,31,134, 0.9);
            width: 100%;
            height: 60px;
            line-height: 60px;
            bottom: 0;
            transition: ease 0.8s;
            p {
                color: #fff;
                width: 100%;
                text-align: center;
                font-size: 25px;
                letter-spacing: 3px;
                font-weight: 700;
            }
        }

        .img_container {
            display: flex;
            height: 100%;
            align-items: center;
            padding: 0 30px;
            box-sizing: border-box;
            padding-bottom: 60px;
            img {
                height: 90%;
                width: 100%;
                object-fit: contain;
                transition: ease 0.8s;
            }
        }

        &:hover {
            .img_info {
                height: 40%;
            }
            img {
                scale: 1.1;
            }

        }

    }
}</style>