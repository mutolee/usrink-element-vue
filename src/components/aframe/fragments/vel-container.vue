<script setup>
import {computed} from "vue";
import {useCollapseStateStore} from "@/stores/data/collapseStateStore";
import VelContainerHeader from "@/components/aframe/fragments/vel-container-header.vue";
import VelContainerPage from "@/components/aframe/fragments/vel-container-page.vue";

const collapseStateStore = useCollapseStateStore()

// 根据菜单的折叠状态，计算容器padding-left的值
const containerPaddingLeft = computed(() => collapseStateStore.collapseState ? '64px' : '220px')

</script>

<template>
    <section
        class="vel_container"
        :style="{paddingLeft:containerPaddingLeft}">
        <vel-container-header/>
        <vel-container-page/>
    </section>
</template>

<style scoped>
.vel_container {
    height: 100vh;
    background-color: #f6f8f9;
    transition: padding-left .5s;
}
</style>