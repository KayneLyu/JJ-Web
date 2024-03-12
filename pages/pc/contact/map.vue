<template>
    <div id="container"></div>
</template>

<script setup lang="ts">
import mini from '@/assets/images/logo/mini.png';
declare let AMap: any;

let map: any = shallowRef(null)
// 加载地图文件
onMounted(() => {
    map.value = new AMap.Map('container', {
        zoom: 17.3,
        center: [113.697378, 23.02478]
    });


    var circle = new AMap.Circle({
        center: new AMap.LngLat("113.696936", "23.02385"), //圆心位置
        radius: 5, //半径 单位:米
        strokeColor: "#FF0012", //线颜色
        strokeOpacity: 1, //线透明度
        strokeWeight: 3, //线粗细度
        fillColor: "#FF0012", //填充颜色
        fillOpacity: 0.5, //填充透明度
    });
    let marker = new AMap.Marker({
        title: '东莞市金久自动化科技有限公司',
        position: [113.696936, 23.02385], // 位置
        icon: mini
    })
    map.value?.add([marker, circle])
})

const destroyMap = () => {
    map.value?.destroy()
}

onUnmounted(() => {
    console.log('销毁map2');
    destroyMap()
});

</script>

<style scoped lang="less">
#container {
    margin-top: 30px;
    margin-left: 20px;
    width: 100%;
    min-width: 600px;
    height: 600px;
    background-color: #fff;
    border-radius: 20px;
}
</style>