<script setup lang='ts'>
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
        name: '中央供料',
        info: '',
        src: airRing
    },
    {
        name: '冷却系统',
        info: '',
        src: airRing
    },
])

const props = defineProps({
    section: Number
})

</script>

<template>
    <div class="second_section">
        <div class="title">
            <p class="title_text" :class="{'animate_top': props.section! >= 2 }"><span>“</span> 核心产品</p>
            <p class="title_text title_info" :class="{'animate_top': props.section! >= 2 }">为客户提供专业化、高性能的专用设备</p>
        </div>
        <ul>
            <li v-for="(item, index ) in productList" :key="index" :class="{'animate_left': props.section! >=2 && index <=2,'animate_right': props.section! >=2 && index >2 }" >
                <div class="img_container">
                    <img :src="item.src" alt="">
                </div>
                <div class="img_info">
                    <p>{{ item.name }}</p>
                    <div class="button_box">
                        <Button :size="18" :width="150" :height="45" text="了解更多 →" toRightBg="#84A1FF" />
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
        background-color: rgba(250, 250, 250, .8);
        height: 48%;
        width: 32%;
        border-radius: 8px;
        overflow: hidden;
        transition: ease 0.4s;
        .img_info {
            position: absolute;
            background-color: rgba(29, 31, 134, 0.9);
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
            .button_box {
                margin-top: 10px;
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
            box-shadow: 0 0 5px 5px rgba(193, 193, 193, 0.4);
            transform: translateY(-15px);
            .img_info {
                height: 140px;
            }

            img {
                scale: 1.1;
            }

        }

    }
}


.animate_left {
    animation: left_animate 1s linear;
}
.animate_right {
    animation: right_animate 1s linear;
}
.animate_top {
    animation: top_animate 0.8s linear;
}
@keyframes right_animate {
    0%{
        transform: translateX(35vw);
    }
    100%{
        transform: translateX(0);
    }
}

@keyframes left_animate {
    0%{
        transform: translateX(-35vw);
    }
    100%{
        transform: translateX(0);
    }
}
@keyframes top_animate {
    0%{
        scale: 0.4;
        transform: translateY(150px);
    }
    100%{
        scale: 1;
        transform: translateY(0);
    }
}
</style>