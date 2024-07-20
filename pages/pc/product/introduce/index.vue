<template>
    <div class="introduce">
        <div class="title">
            {{ getInfoFromProps().name }}
        </div>
        <div class="content">
            <img :src="getInfoFromProps().image" alt="" />
            <div class="text_box"></div>
        </div>
    </div>
</template>

<script  lang='ts' setup>
import { useRoute } from 'vue-router'
import cz from '@/assets/images/index/cz6.png';
import airRing from "@/assets/images/index/air_ring.png";
import singleMixin from "@/assets/images/index/dsz.webp";
import airHot from '@/assets/images/index/air_hot.png';

type IProductName = string | null

const route = useRoute()
const name = (route.query.product) as IProductName//拿到传递参数 

const productList = {
    'air_ring_wind': {
        image: airRing,
        name: '自动风环（风量）',
    },
    'air_ring_temp': {
        image: airHot,
        name: '自动风环（风温）',
    },
    'weight_mkz': {
        image: cz,
        name: '称重配料',
    },
    'weight_dsz': {
        image: singleMixin,
        name: '单失重',
    },
    'side_recovery': {
        image: airRing,
        name: '边料回收',
    },
    'center_provide': {
        image: airRing,
        name: '中央供料',
    }
}

const getInfoFromProps = () => {
    if (!name || typeof (name) == 'string') {
        return productList.air_ring_temp
    }
    return productList[name]
}

</script>

<style scoped lang="less">
.introduce {
    width: 50vw;
    margin: 0 auto;
}

.title {
    margin-top: 150px;
    font-size: 40px;
    font-weight: 700;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    img {
        width: 500px;
        height: 500px;
        object-fit: contain;
    }

    .text_box {
        width: 500px;
        height: 800px;
    }
}</style>