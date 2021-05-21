<template>
    <section class="vel_page" :style="{height:height}">
        <el-scrollbar style="height: 100%">
            <div class="vel_page_content">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </el-scrollbar>
    </section>
</template>

<script>
import NProgress from 'nprogress'

export default {
    name: "vel_page",
    props: ['height'],
    methods: {
        reload: function () {
            NProgress.start();  // 页面 loading 进度条开始
            let vm = this.$rkm.cacheMap[this.$route.path];
            vm.refresh = false
            this.$nextTick(() => {
                vm.refresh = true
                NProgress.done();  // 页面 loading 进度条结束
            })
        }
    }
}
</script>

<style scoped>

.vel_page .vel_page_content {
    padding: 15px;
}
</style>
