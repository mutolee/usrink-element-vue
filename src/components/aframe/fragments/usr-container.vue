<script setup>
import {computed} from "vue";
import {useCollapseStateStore} from "@/stores/data/collapseStateStore";
import usrContainerHeader from "@/components/aframe/fragments/usr-container-header.vue";
import usrContainerPage from "@/components/aframe/fragments/usr-container-page.vue";

const collapseStateStore = useCollapseStateStore()

// 根据菜单的折叠状态，计算容器padding-left的值
const containerPaddingLeft = computed(() => collapseStateStore.collapseState ? '64px' : '220px')

</script>

<template>
    <section
        class="usr_container"
        :style="{paddingLeft:containerPaddingLeft}">
        <usr-container-header/>
        <usr-container-page/>
    </section>
</template>

<style scoped>
.usr_container {
    height: 100vh;
    background-color: #f6f8f9;
    transition: padding-left .5s;
}
</style>