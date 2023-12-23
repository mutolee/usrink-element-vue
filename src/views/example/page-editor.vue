<script setup>
import VelEditor from "@/components/common/_vel-cpt/vel-editor.vue";
import {ref} from "vue";

const valueHtml = ref({val: '<p></p>'})

</script>

<template>
    <div class="page">
        <vel-editor
            :content="valueHtml"
            ></vel-editor>
        <el-input
            v-model="valueHtml.val"
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 8}"
            placeholder="请输入内容..."
            style="width: 600px; margin-top: 20px"
        ></el-input>
    </div>
</template>


<style scoped>
.page {
    padding: 20px;
}


</style>