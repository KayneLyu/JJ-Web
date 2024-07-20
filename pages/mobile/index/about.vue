<template>
    <div class="about_container">
        <p class="tips_text">
            关于我们
        </p>
        <p class="about_content">
            &nbsp;&nbsp;&nbsp;&nbsp;金久始于2004，自成立以来，我们致力于提供优质的塑胶成型辅助生产设备，为客户提供一流的解决方案和服务。
            作为行业领先者，我们的产品范围涵盖各种自动化控制设备，包括自动控制风环、配料称重系统、薄膜测厚仪等，以满足客户在塑胶成型过程中的多样化需求。
            在金久，我们的团队由经验丰富的专业人士组成，他们拥有深厚的技术背景和对行业的热情。我们不仅注重产品质量和性能，还致力于不断创新和改进，以满足客户日益增长的需求和行业的不断变化。无论是量身定制的解决方案还是标准产品，我们都以卓越的品质和可靠的性能为客户提供卓越的价值。
        </p>
        <div>
            <ul class="show_number">
                <li v-for="(item, index) in source" :key="index">
                    <div class="number">
                        <StaticNumber :size="26" :startValue="0" :endValue="item.number" :duration="3000" />
                        <p> + </p>
                    </div>
                    <p class="text">
                        {{ item.text }}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang='ts' >
import StaticNumber from '@/components/static-number.vue';

const source = ref([
    {
        number: 10,
        text: '从业经验（年）'
    },
    {
        number: 20,
        text: '研发、技术团队（人）'
    },
    {
        number: 20,
        text: '国家专利证书（项）'
    },
    {
        number: 100,
        text: '客户选择我们'
    },
])
</script>

<style scoped lang="less">
.tips_text {
    width: fit-content;
    font-size: 34px;
    letter-spacing: 2px;
    font-weight: 400;
    margin-left: 10px;
    border-bottom: 4px solid #8cbeff;
}

.about_content {
    margin-top: 20px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    background: #fff;
}

.number {
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 10px 0;

    p {
        color: #fff;
        font-size: 18px;
    }
}

.show_number {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #8cbeff;
    padding: 20px 20px;
    box-sizing: border-box;
    background-image: url("@/assets/mobile/index/about_bg.webp");
    background-repeat: no-repeat;
    background-size: cover;

    li {
        width: 50%;

        .text {
            font-size: 12px;
            text-align: center;
            color: #fff;
        }
    }
}
.number {
    font-weight: 400 !important;
}
</style>