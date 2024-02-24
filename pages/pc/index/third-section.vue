<script setup lang='ts'>
import StaticNumber from '@/components/static-number.vue';
import Button from '@/components/button.vue';

const props = defineProps({
    section: Number
})

const source = ref([
    {
        number: 0,
        text: '从业经验（年）'
    },
    {
        number: 0,
        text: '研发、技术团队（人）'
    },
    {
        number: 0,
        text: '国家专利证书（项）'
    },
    {
        number: 0,
        text: '客户选择我们'
    },
])
watch(() => props.section, (newValue) => {
    if (newValue == 3) {
        source.value = [
            {
                number: 20,
                text: '从业经验（年）'
            },
            {
                number: 30,
                text: '研发、技术团队（人）'
            },
            {
                number: 25,
                text: '国家专利证书（项）'
            },
            {
                number: 1000,
                text: '客户选择我们'
            },
        ]
    }
})


</script>

<template>
    <div class="third_section">
        <div class="content_container">
            <div class="title">
                <p class="title_text" :class="{ 'animate_title': props.section! >= 3 }"><span>“</span> 走进金久</p>
                <p class="title_text title_info" :class="{ 'animate_content': props.section! >= 3 }">
                    东莞市金久自动化科技有限公司是一家专注于塑料挤出领域的高科技技术型企业 <br /> 我们致力于研发、生产和销售塑料挤出相关设备与技术解决方案</p>
            </div>

            <ul class="show_number" :class="{ 'animate_number': props.section! >= 3 }">
                <li v-for="(item, index) in source" :key="index">
                    <div class="number">
                        <StaticNumber :startValue="0" :endValue="item.number" :duration="3000" />
                        <p> + </p>
                    </div>
                    <p class="text">
                        {{ item.text }}
                    </p>
                </li>
            </ul>

            <div class="button_box" :class="{ 'animate_button': props.section! >= 3 }">
                <Button :size="18" :width="280" :height="70" text="了解更多 →" toTopBg="#1D1F86" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.third_section {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-image: url('@/assets/images/index/ar_bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
}

.content_container {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
}

.title {
    margin-top: 22vh;
    text-align: center;

    .title_text {
        text-align: center;
        letter-spacing: 3px;
        color: #fff;
        height: 60px;
        line-height: 60px;
        font-family: "Arial", "syht";
        font-size: 52px;
        font-weight: 600;
        margin-bottom: 30px;

        span {
            color: red;
        }
    }

    .title_info {
        margin: 0 auto;
        max-width: 820px;
        font-weight: 400;
        font-size: 20px;
        line-height: 35px;
        margin-top: 15px;
    }
}

ul {
    display: flex;
    margin-top: 50px;
    width: 100vw;
    justify-content: center;

    li {
        margin: 0 100px;

        .number {
            font-weight: 700;
            font-family: "MB";
            display: flex;
            justify-content: center;

            p {
                // margin-left: 10px;
                color: #fff;
                font-size: 45px;
            }
        }

        .text {
            margin-top: 10px;
            color: #fff;
            font-size: 18px;
            font-weight: 700;
        }
    }
}

.button_box {
    margin-top: 20vh;
}

.button_box,
.title_text,
ul {
    opacity: 0;
}

.animate_title,
.animate_content,
.animate_number,
.animate_button {
    animation: show-content 0.8s linear forwards;
}

.animate_content {
    animation-delay: 0.6s;
}

.animate_number {
    animation-delay: 1s;
}

.animate_button {
    animation-delay: 1.6s;
}


@keyframes show-content {
    0% {
        opacity: 0;
        transform: translateY(100px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}</style>