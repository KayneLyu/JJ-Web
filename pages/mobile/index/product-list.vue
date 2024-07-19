<template>
    <div class="product_center">
        <h1>产品中心</h1>
        <div class="product_tips">
            <p></p>
            <p class="tips_text">掌握核心技术</p>
            <p></p>
        </div>
        <ul class="product_list">
            <li v-for="(item, index) in productList" :key="index">
                <div class="product_item">
                    <img :src="item.src" alt="">
                </div>
                <p>{{ item.name }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup lang='ts' >
import airRing from "@/assets/images/index/air_ring.png";
import singleMixin from "@/assets/images/index/dsz.webp";
import cz6 from '@/assets/images/index/cz6.png';
import airHot from '@/assets/images/index/air_hot.png';
import reclaim from '@/assets/images/index/bian.webp';
import center from '@/assets/images/index/center.webp';


const productList = ref([
    {
        name: '自动风环（风量）',
        info: '',
        src: airRing
    },
    {
        name: '自动风环（风温）',
        info: '',
        src: airHot
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
        src: reclaim
    },
    {
        name: '中央供料',
        info: '',
        src: center
    },
])
</script>

<style scoped lang="less">
.product_center {
    h1 {
        // font-size: 34px;
        letter-spacing: 2px;
        font-weight: 400;
        text-align: center;
    }

    .product_tips {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 5px;

        p {
            height: 1px;
            width: 20px;
            color: #909090;
            background-color: #909090;
        }

        .tips_text {
            margin: 0 10px;
            height: 20px;
            font-size: 14px;
            line-height: 20px;
            width: auto;
            background-color: unset;
        }
    }

    .product_list {
        margin-top: 20px;
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li {
            width: 48vw;
            background: #fff;
            text-align: center;
            border-radius: 6px;
            overflow: hidden;
            margin-bottom: 10px;
            .product_item {
                width: 100%;
                // background: #fff;
                padding: 5px;
                box-sizing: border-box;
            }

            img {
                width: 100%;
                height: 40vw;
                object-fit: contain;
            }
            p {
                height: 30px;
                line-height: 30px;
                background: #8cbeff;
                color: #fff;
            }
        }
    }
}</style>