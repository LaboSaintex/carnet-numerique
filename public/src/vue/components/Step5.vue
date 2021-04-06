<template>
    <Step5Message class="overlay"/>
</template>
<script>
import Step5Message from "./viewmessages/Step5Message.vue";

export default ({
    components: {
        Step5Message,
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