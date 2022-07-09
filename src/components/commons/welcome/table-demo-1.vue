<template>
  <div style="height: 260px">
    <table class="table">
      <tr>
        <td>vue</td>
        <td>^3.2.37</td>
        <td>vite</td>
        <td>^2.9.13</td>
      </tr>
      <tr>
        <td>vue-router</td>
        <td>^4.0.16</td>
        <td>vuex</td>
        <td>^4.0.2</td>
      </tr>
      <tr>
        <td>element-plus</td>
        <td>^2.2.8</td>
        <td>axios</td>
        <td>^0.27.2</td>
      </tr>
      <tr>
        <td>echarts</td>
        <td>^5.3.3</td>
        <td>localforage</td>
        <td>^1.10.0</td>
      </tr>
      <tr>
        <td>js-cookie</td>
        <td>^3.0.1</td>
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

<script setup>
import {ref} from "vue";

const name = "table-demo-1"

const githubUrl = ref('https://github.com/mutolee/vel-admin-web')

</script>

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