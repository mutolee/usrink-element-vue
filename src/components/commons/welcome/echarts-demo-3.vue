<template>
  <div style="height: 320px">
    <v-chart class="chart" :option="option" :autoresize="true"/>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance} from "vue";
import VChart from "vue-echarts";
import geoJson from '../../../assets/china.json'

const globalCfg = getCurrentInstance().appContext.config.globalProperties

const name = "echarts-demo-3"


let randomData = () => {
  return Math.round(Math.random() * 500);
}

let data = [
  {name: '北京', value: '100'}, {name: '天津', value: randomData()},
  {name: '上海', value: randomData()}, {name: '重庆', value: randomData()},
  {name: '河北', value: randomData()}, {name: '河南', value: randomData()},
  {name: '云南', value: randomData()}, {name: '辽宁', value: randomData()},
  {name: '黑龙江', value: randomData()}, {name: '湖南', value: randomData()},
  {name: '安徽', value: randomData()}, {name: '山东', value: randomData()},
  {name: '新疆', value: randomData()}, {name: '江苏', value: randomData()},
  {name: '浙江', value: randomData()}, {name: '江西', value: randomData()},
  {name: '湖北', value: randomData()}, {name: '广西', value: randomData()},
  {name: '甘肃', value: randomData()}, {name: '山西', value: randomData()},
  {name: '内蒙古', value: randomData()}, {name: '陕西', value: randomData()},
  {name: '吉林', value: randomData()}, {name: '福建', value: randomData()},
  {name: '贵州', value: randomData()}, {name: '广东', value: randomData()},
  {name: '青海', value: randomData()}, {name: '西藏', value: randomData()},
  {name: '四川', value: randomData()}, {name: '宁夏', value: randomData()},
  {name: '海南', value: randomData()}, {name: '台湾', value: randomData()},
  {name: '香港', value: randomData()}, {name: '澳门', value: randomData()}, {name: '南海诸岛', value: randomData()}
];

globalCfg.$echarts.registerMap('china', geoJson)

const option = ref({
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br/>注册数：{c}'
  },
  visualMap: {
    min: 0,
    max: 800,
    text: ['最高', '最低'],
    realtime: false,
    calculable: true,
    inRange: {
      color: ['lightskyblue', 'yellow', 'orangered']
    }
  },
  series: [
    {
      name: '注册分布',
      type: 'map',
      map: 'china',
      label: {
        show: false
      },
      data: data
    }
  ]
})


</script>

<style scoped>

</style>