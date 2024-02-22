<script setup lang='ts'>
import cz6 from '@/assets/images/index/cz6.png';
import fh1 from '@/assets/images/index/fh1.png';
import fh2 from '@/assets/images/index/fh2.png';

</script>

<template>
    <div class="index_container">
        <div class="index_title">
            <p>金久为您提供塑胶成型辅助生产设备</p>
            <div>
                <button>
                    了解更多 →
                </button>
            </div>
        </div>
        <div class="image_container">
            <img :src="fh1" alt="风环">
            <img :src="cz6" alt="风环">
            <img :src="fh2" alt="风环">
        </div>
    </div>
</template>

<style scoped lang="less">
.index_container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom right, #79A9CC, #9FBBD0 50%, #E9E9E9);

    .index_title {
        width: 100%;
        height: 200px;
        line-height: 200px;
        margin-top: 8%;
        color: #fff;
        font-size: 40px;
        p {
            // text-align: right;
            cursor: pointer;
            white-space: nowrap;
            letter-spacing: 8px;
            width: 100%;
            height: 150px;
            line-height: 200px;
            font-size: 60px;
        }

        button {
            position: relative;
            cursor: pointer;
            width: 220px;
            height: 70px;
            border: 2px solid rgb(235, 235, 235, 0.2);
            border-radius: 8px;
            color: #fff;
            font-size: 24px;
            letter-spacing: 3px;
            background-color: rgba(255, 255, 255, 0.1);
            overflow: hidden;

            &:before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 0;
                height: 100%;
                z-index: -2;
                border-radius: 4px;
                transition: 0.8s;
                // background: rgb(132, 161, 255);
                z-index: -1;
                background-color: #1D1F86;
            }

            &:hover {
                z-index: 1;
                background: transparent;
            }

            &:hover:before {
                width: 100%;
            }
        }
    }

    .image_container {
        display: flex;
        box-sizing: border-box;
        width: 100vw;
        justify-content: space-around;
        align-items: center;
        padding: 100px;

        img {
            width: 500px;
            height: 500px;
            object-fit: contain;
        }
    }


}
</style>