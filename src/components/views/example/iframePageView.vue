<template>
    <el-card v-if="refresh" class="box-card" shadow="never" :body-style="{padding:'1px',height:'calc(100vh - 124px)'}">
        <vel_iframe url="http://localhost:8080/#/welcome"></vel_iframe>
    </el-card>

</template>

<script>
import vel_iframe from "../../common/vel_iframe";
export default {
    name: "iframePageView",
    components: {vel_iframe}
}
</script>

<style scoped>

</style>
