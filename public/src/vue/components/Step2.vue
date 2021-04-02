<template>
    <Step2Message class="overlay"/>
</template>
<script>
import Step2Message from "./viewmessages/Step2Message.vue";

export default ({
    components: {
        Step2Message,
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