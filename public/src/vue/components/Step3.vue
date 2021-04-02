<template>
    <Step3Message class="overlay"/>
</template>
<script>
import Step3Message from "./viewmessages/Step3Message.vue";

export default ({
    components: {
        Step3Message,
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