<template>
  <div style="height: 260px">
    <v-chart class="chart" :option="option" :autoresize="true"/>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance} from "vue";
import VChart from "vue-echarts";

const globalCfg = getCurrentInstance().appContext.config.globalProperties

const name = "echarts-demo-2"

const option = ref({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '浏览器占比',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        {value: 66.99, name: 'Chrome'},
        {value: 9.66, name: 'Safari'},
        {value: 9.11, name: 'Edge'},
        {value: 8.05, name: 'Firefox'},
        {value: 2.71, name: 'Opera'},
        {value: 3.47, name: 'Other'}
      ]
    }
  ]
})


</script>

<style scoped>

</style>