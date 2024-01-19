<script setup>
import usrContainerHeaderMenu from '@/components/aframe/fragments/usr-container-header-menu.vue'
import usrContainerHeaderNavbar from "@/components/aframe/fragments/usr-container-header-navbar.vue";
</script>

<template>
    <section class="usr_container_header">
        <usr-container-header-menu/>
        <usr-container-header-navbar/>
    </section>
</template>

<style scoped>
.usr_container_header {
    height: 90px;
    position: relative;
    z-index: 999;
    background-color: #ffffff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%)
}
</style>