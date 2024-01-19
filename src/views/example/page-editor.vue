<script setup>
import usrEditor from "@/components/common/_usr-cpt/usr-editor.vue";
import {ref} from "vue";

const valueHtml = ref({val: '<p></p>'})

</script>

<template>
    <div class="page">
        <usr-editor
            :content="valueHtml"
            ></usr-editor>
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