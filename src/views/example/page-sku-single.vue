<script setup>
import usrSkuSingle from "@/components/common/_usr-cpt/usr-sku-single.vue";
import {ref} from "vue";

// 初始化sku
const skus = ref([
    // 数据结构：
    {
        name: '',
        price: 0.01,
        delPrice: 0.02,
        count: 99
    }
])

</script>

<template>
    <div class="page">
        <el-card shadow="never" class="usr_card_override">
            <usr-sku-single :skus="skus"></usr-sku-single>
            {{skus}}
        </el-card>
    </div>

</template>

<style scoped>
.page {
    padding: 20px;
}

.usr_card_override {
    height: calc(100vh - 90px - 20px - 20px - 2px);
}
</style>