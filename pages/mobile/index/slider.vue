<template>
    <swiper 
        :speed="1000"
        :slidesPerView="1" 
        :spaceBetween="0" 
        loop
        :centeredSlides="true" 
        :pagination="{
            clickable: true,
        }" 
        :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }" 
        :navigation="false" 
        :modules="modules" 
        class="mySwiper" 
        ref="mySwiper">
        
        <swiper-slide class="slide">
            <div class="header_img" style="opacity: 1;">
                <img :src="product" alt="" style="opacity: 1;" />
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="header_img" style="opacity: 1;">
                <img :src="product" alt="" style="opacity: 1;" />
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="header_img" style="opacity: 1;">
                <img :src="product" alt="" style="opacity: 1;" />
            </div>
        </swiper-slide>
    </swiper>
</template>

<script setup lang='ts' >
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay,FreeMode ,EffectFade } from 'swiper/modules';
import product from '@/assets/mobile/index/index_1.webp';
import 'swiper/css'
import 'swiper/css/pagination'
const modules = [Autoplay, Pagination, EffectFade,FreeMode]

</script>

<style scoped lang="less">

.mySwiper {
    height: 450px;
}
.slide {
    height: 450px;
    
}
:deep(.swiper-pagination-bullet) {
    background: rgb(214, 214, 214);
}
:deep(.swiper-pagination-bullet-active) {
    background: #8cbeff;
}
.header_img {
    width: 100vw;
    height: 450px;
    img {
        width: 100%;
        object-fit: contain;
        filter: brightness(0.6);
    }
}
</style>