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
          <div @click="generateVideo" :class="{ clickable: !generateClicked }">
            <EndButton v-if="!generateClicked"/>
            <Loader v-else/>
          </div>
        </div>

        <div v-else class="centered overlay-svg">
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
import Loader from "./fixed_components/Loader.vue";

export default {
  components: {
    EndButton,
    EndMessage,
    Loader
  },
  data() {
    return {
      generateClicked: false,
      generatedVideoPath: "/_projects/" + this.$root.currentProject.slugFolderName + "/output.webm",
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
     updateAndShowPlayer: function() {
      this.$socketio.listFolder({
        type: 'projects',
        slugFolderName: this.$root.currentProject.slugFolderName
      });
      this.$root.currentProject.video_generated = true;
      this.$root.editFolder({
        type: "projects",
        slugFolderName: this.$root.currentProject.slugFolderName,
        data: {
          video_generated: true,
        },
      });
    }, 
    generateVideo: function () {
      this.generateClicked = true;
      console.log("SENDING VIDEO GENERATE REQUEST");
      let generateSettings = {
        projectPath: this.$root.currentProject.fullFolderPath,
        musicPath: "/_musics/" + (this.$root.currentProject.music_name != undefined ? this.$root.currentProject.music_name : ""),
        clip1_name: this.$root.currentProject.clip1_name,
        clip2_name: this.$root.currentProject.clip2_name,
        clip3_name: this.$root.currentProject.clip3_name,
        clip4_name: this.$root.currentProject.clip4_name,
        clip5_name: this.$root.currentProject.clip5_name,
        clip1_desc: this.$root.currentProject.clip1_desc,
        clip2_desc: this.$root.currentProject.clip2_desc,
        clip3_desc: this.$root.currentProject.clip3_desc,
        clip4_desc: this.$root.currentProject.clip4_desc,
        clip5_desc: this.$root.currentProject.clip5_desc,
        workshop_type: this.$root.currentProject.workshop_type,
        title: this.$root.currentProject.name,
      }
      if(this.$root.currentProject.authors !== undefined) {
        generateSettings.participants = "";
        this.$root.currentProject.authors.forEach(author => {
          generateSettings.participants += `${author.name}\n`;
        });
      }
      console.log("GENERATE SETTINGS : \n" + JSON.stringify(generateSettings));
      this.$socketio.socket.emit("videoRequest", generateSettings);
      this.$socketio.socket.on("videoGenerated", () => {
        console.log("PROJECT'S VIDEO GENERATED");
        this.updateAndShowPlayer();
      });
    }
  },
};
</script>
<style scope>
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
.video-player {
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