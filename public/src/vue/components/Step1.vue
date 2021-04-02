<template>
    <Step1Message class="overlay"/>
</template>
<script>
import Step1Message from "./viewmessages/Step1Message.vue";

export default ({
    components: {
        Step1Message,
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