<template>
    <section class="vel_page" :style="{height:height}">
        <el-scrollbar style="height: 100%">
            <div class="vel_page_content">
                <keep-alive v-if="loaded">
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
    data() {
        return {
            loaded: true
        }
    },
    methods: {
        reload() {
            NProgress.start();  // 页面 loading 进度条开始
            this.loaded = false;
            let that = this;
            this.$nextTick(() => {
                that.loaded = true;
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
