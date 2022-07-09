<template>
  <div class="progress_demo" style="height: 320px">
    <p>
      <span>给客户打电话，约见面时间</span>
      <el-progress :percentage="50" :color="customColors"/>
    </p>
    <p>
      <span>打出差申请</span>
      <el-progress :percentage="60" :color="customColors"/>
    </p>
    <p>
      <span>客户回访电话</span>
      <el-progress :percentage="10" :color="customColors"/>
    </p>
    <p>
      <span>打30个电话</span>
      <el-progress :percentage="80" :color="customColors"/>
    </p>
    <p>
      <span>整理上月发票</span>
      <el-progress :percentage="30" :color="customColors"/>
    </p>
    <p>
      <span>排出项目周期</span>
      <el-progress :percentage="40" :color="customColors"/>
    </p>
  </div>
</template>

<script setup>
const name = "progress-demo-1"

const customColors = [
  {color: '#f56c6c', percentage: 20},
  {color: '#e6a23c', percentage: 40},
  {color: '#0a9ce5', percentage: 60},
  {color: '#1989fa', percentage: 80},
  {color: '#5cb87a', percentage: 100},
]

</script>

<style scoped>
.progress_demo {
  color: #6c6c6c;
}

.progress_demo p {
  padding-bottom: 20px;
}
</style>