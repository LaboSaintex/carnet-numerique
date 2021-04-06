<template>
    <Step4Message class="overlay"/>
</template>
<script>
import Step4Message from "./viewmessages/Step4Message.vue";

export default ({
    components: {
        Step4Message,
    }
});
</script>
<style scoped>
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }
</style>