<!-- 
  Component for The bottom progression animation
  For each new completed step a new object or group will be colored
  gets the currentView property for the current step
-->
<template>
  <div class="bottom-path-objects">
    <LinePath />
    <!-- Chosing the right version of the objects composing the path depending on which stage of the project viewing or creation -->
    <ColoredBackpack v-if="this.indexOfPathProgress() >= 2"/>
    <UncoloredBackpack v-else />

    <ColoredRobot v-if="this.indexOfPathProgress() >= 3"/>
    <UncoloredRobot v-else/>

    <ColoredSchoolTools v-if="this.indexOfPathProgress() >= 4"/>
    <UncoloredSchoolTools v-else />

    <ColoredLearning v-if="this.indexOfPathProgress() >= 5"/>
    <UncoloredLearning v-else />

    <ColoredLaptopGroup v-if="this.indexOfPathProgress() >= 6"/>
    <UncoloredLaptopGroup v-else />

    <ColoredPlaneGroup v-if="this.indexOfPathProgress() >= 7"/>
    <UncoloredPlaneGroup v-else />

    <ColoredFinishGroup v-if="this.indexOfPathProgress() >= 8"/>
    <UncoloredFinishGroup v-else />
  </div>
</template>
<script>
// Imports for creating the bottom path objects with progression animation for each step
import LinePath from "./LinePath.vue";
// Imports for the uncolored componenents version of the objects for the bottom path objects progression
// animation
import UncoloredBackpack from "../stepcomponents/UncoloredBackpack.vue";
import UncoloredLearning from "../stepcomponents/UncoloredLearningGroup.vue";
import UncoloredRobot from "../stepcomponents/UncoloredRobotGroup.vue";
import UncoloredSchoolTools from "../stepcomponents/UncoloredSchoolTools.vue";
import UncoloredLaptopGroup from "../stepcomponents/UncoloredLaptopGroup.vue";
import UncoloredPlaneGroup from "../stepcomponents/UncoloredPlaneGroup.vue";
import UncoloredFinishGroup from "../stepcomponents/UncoloredFinishGroup.vue";
// Imports for the colored componenents version of the objects for the bottom path objects progression
// animation
import ColoredBackpack from "../stepcomponents/ColoredBackpack.vue";
import ColoredLearning from "../stepcomponents/ColoredLearningGroup.vue";
import ColoredRobot from "../stepcomponents/ColoredRobotGroup.vue";
import ColoredSchoolTools from "../stepcomponents/ColoredSchoolTools.vue";
import ColoredLaptopGroup from "../stepcomponents/ColoredLaptopGroup.vue";
import ColoredPlaneGroup from "../stepcomponents/ColoredPlaneGroup.vue";
import ColoredFinishGroup from "../stepcomponents/ColoredFinishGroup.vue";

export default {
  props: {
    currentView: String
  },
  components: {
    LinePath,
    // uncolored objects/groups
    UncoloredBackpack,
    UncoloredLearning,
    UncoloredRobot,
    UncoloredSchoolTools,
    UncoloredLaptopGroup,
    UncoloredPlaneGroup,
    UncoloredFinishGroup,
    // colored objects/groups
    ColoredBackpack,
    ColoredLearning,
    ColoredRobot,
    ColoredSchoolTools,
    ColoredLaptopGroup,
    ColoredPlaneGroup,
    ColoredFinishGroup,

  },
  data() {
    return {
      pathProgress: [
        "ProjectView", "ProjectView.authorList", "ProjectView.workshop", 
        "ProjectView.step1", "ProjectView.step2", "ProjectView.step3", 
        "ProjectView.step4", "ProjectView.step5", "ProjectView.end"
      ]
    };
  },
  methods: {
    indexOfPathProgress: function() {
      //console.log(this.pathProgress.indexOf($root.do_navigation.view));
      return this.pathProgress.indexOf(this.currentView);
    }
  }
};
</script>
<style>
  /* overlay all the child SVGs on top of each others */
  .bottom-path-objects svg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
</style>