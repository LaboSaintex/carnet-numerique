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
            <div @click="createOrOpenVideo" class="clickable">
              <EndButton />
            </div>
          </div>
        </div>
      </transition>
    </div>
</template>
<script>
import EndButton from "./buttons/EndButton.vue";
import EndMessage from "./viewmessages/EndMessage.vue";
import axios from "axios";

export default {
  components: {
    EndButton,
    EndMessage
  },
  methods: {
    createOrOpenVideo: function() {
      if(!this.$root.currentProject.video_generated) {
        console.log("sending VIDEO GENERATE REQUEST");
        axios.post("/myvideo-upload", {projectPath: this.$root.currentProject.fullFolderPath})
        .then(response => {
          console.log(response);
          this.$socketio.listFolders({ type: 'projects' });
          this.$root.currentProject.video_generated = true;
          this.$root.editFolder({ 
          type: 'projects', 
          slugFolderName: this.$root.currentProject.slugFolderName, 
          data: { 
            video_generated: true
          }
        });
        });     
      }
    }
  }
}
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
  .end-view .centered-button div {
    width: auto;
    height: 12%;
    z-index: 2;
  }
</style>