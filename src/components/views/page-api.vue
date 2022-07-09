<template>
  <div class="page">
    <el-card shadow="never" class="vel_card_override">
      <h3>{{ name }} 页面暂未开发...</h3>
    </el-card>
  </div>
</template>

<script setup>
const name = 'page-api'
</script>

<style scoped>
.page {
  padding: 20px;
}

.vel_card_override {
  height: calc(100vh - 90px - 20px - 20px - 2px);
}

</style>