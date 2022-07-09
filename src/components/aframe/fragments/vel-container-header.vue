<template>
  <section class="vel_container_header">
    <vel-container-header-top/>
    <vel-container-header-navbar/>
  </section>
</template>

<script setup>
import VelContainerHeaderTop from "./vel-container-header-menu.vue";
import VelContainerHeaderNavbar from "./vel-container-header-navbar.vue";


</script>

<style scoped>
.vel_container_header {
  height: 90px;
  position: relative;
  z-index: 999;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%)
}
</style>