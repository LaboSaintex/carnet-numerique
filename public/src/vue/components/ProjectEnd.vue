<!--
  Last View for displaying the film of the project
  Launched only after completing all the other steps
-->
<template>
  <div class="end-view">
    <transition name="ProjectView" :duration="500">
      <div>
        <EndMessage class="overlay-svg" />

        <div v-if="!$root.currentProject.video_generated" class="centered overlay-svg">
          <div @click="generateVideo" class="clickable">
            <EndButton />
          </div>
        </div>

        <div v-if="$root.currentProject.video_generated" class="centered overlay-svg">
          <vue-plyr class="video-player">
            <video :src="generatedVideoPath" controls preload="auto" />
          </vue-plyr>
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
    EndMessage,
  },
  data() {
    return {
      generatedVideoPath: this.$root.currentProject.slugFolderName + "/output.webm",
      plyr_options: {
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "fullscreen",
        ],
        iconUrl: "/images/plyr.svg",
      },
    };
  },
  methods: {
    generateVideo: function () {
      console.log("sending VIDEO GENERATE REQUEST");
      axios.post("/myvideo-upload", {projectPath: this.$root.currentProject.fullFolderPath})
        .then((response) => {
          console.log(response);
          this.$root.currentProject.video_generated = true;
          this.$root.editFolder({
            type: "projects",
            slugFolderName: this.$root.currentProject.slugFolderName,
            data: {
              video_generated: true,
            },
          });
        })
        .catch((error) => {
          console.log("VIDEO GENERATE REQUEST FAILED : " + error);
        });
    }
  },
};
</script>
<style>
.overlay-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.end-view .centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
.end-view .centered .clickable {
  width: auto;
  height: 12%;
  z-index: 2;
}
.end-view .centered .video-player {
  width: 40%;
  height: auto;
}
.end-view .centered .video-player .plyr--hide-controls .plyr__controls {
  transform: translateY(-0%);
  opacity: 1;
  z-index: 3;
  pointer-events: inherit;
}
</style>