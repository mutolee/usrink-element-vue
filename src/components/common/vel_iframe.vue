<template>
    <iframe :src="url" frameborder="0" width="100%" height="100%"></iframe>
</template>

<script>
export default {
    name: "vel_iframe",
    props: {
        url: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
iframe {
    background-color: #ffffff;
}
</style>
