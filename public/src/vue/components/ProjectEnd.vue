<!--
  Last View for displaying the film of the project
  Launched only after completing all the other steps
-->
<template>
    <div class="end-view">
      <transition name="ProjectView" :duration="500">
        <div>
          <EndMessage class="overlay-svg"/>
          <div class="centered-button overlay-svg">
            <EndButton @click="$root.navigation_back()" class="clickable"/>
          </div>
        </div>
      </transition>
    </div>
</template>
<script>
import EndButton from "./buttons/EndButton.vue";
import EndMessage from "./viewmessages/EndMessage.vue";
export default {
  components: {
    EndButton,
    EndMessage
  },
};
</script>
<style>
  .overlay-svg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  .end-view .centered-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .end-view .centered-button svg {
    width: auto;
    height: 12%;
    z-index: 2;
  }
</style>