<script setup>

</script>

<template>
    <div class="usr-descriptions">
        <slot></slot>
    </div>
</template>

<style scoped>
.usr-descriptions{
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;
}
</style>