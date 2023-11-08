<script setup>
import {ref} from "vue";

const githubUrl = ref('https://github.com/mutolee/vel-admin-web')

</script>

<template>
  <div style="height: 260px">
    <table class="table">
      <tr>
        <td>vue</td>
        <td>^3.3.4</td>
        <td>vite</td>
        <td>^4.4.11</td>
      </tr>
      <tr>
        <td>vue-router</td>
        <td>^4.2.5</td>
        <td>pinia</td>
        <td>^2.1.7</td>
      </tr>
      <tr>
        <td>element-plus</td>
        <td>^2.4.2</td>
        <td>axios</td>
        <td>^1.6.0</td>
      </tr>
      <tr>
        <td>echarts</td>
        <td>^5.4.3</td>
        <td>localforage</td>
        <td>^1.10.0</td>
      </tr>
      <tr>
        <td>js-cookie</td>
        <td>^3.0.5</td>
        <td>nprogress</td>
        <td>^0.2.0</td>
      </tr>
      <tr>
        <td>源代码</td>
        <td colspan="3">
          <a :href="githubUrl">
            <el-button :size="'small'" :type="'warning'">开源地址</el-button>
          </a>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.table {
  width: 100%;
  color: #666;
  border-collapse: collapse;
  background-color: #fff;
}

.table td {
  padding: 9px 15px;
  border: 1px solid #e6e6e6;
}

.table td:nth-child(odd) {
  text-align: right;
  width: 27%;
  background-color: #f7f7f7;
}
</style>