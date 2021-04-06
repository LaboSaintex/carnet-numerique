<template>
  <div class="m_projectview" style="width: 100vw; height: 100vh">
    <Project
      v-if="false"
      :slugProjectName="slugProjectName"
      :project="project"
      :read_only="read_only"
      :context="'full'"
    />
    <!-- 
      Adding the fixed elements of the views
      such as the logos the next arrow and the path animation
    -->
    <BackgroundLogos class="overlay-svg" />
    <BottomPathObjects :currentView="$root.do_navigation.view" />
    <NextArrow
      @saveRecordedVideo="this.updateSaveRecordedVideo"
      :isVideoRecorded="this.isVideoRecorded"
      :currentView="$root.do_navigation.view" class="next-arrow"/>
    <transition name="ProjectView" :duration="500">
      <StepList v-if="$root.do_navigation.view === 'ProjectView'" />
    </transition>
    <transition name="ProjectView" :duration="500">
      <AuthorList
        v-if="$root.do_navigation.view === 'ProjectView.authorList'"
      />
    </transition>
    <transition name="ProjectView" :duration="500">
      <Workshop v-if="$root.do_navigation.view === 'ProjectView.workshop'" />
    </transition>
    <transition name="ProjectView" :duration="500">
      <Step1 v-if="$root.do_navigation.view === 'ProjectView.step1'" />
    </transition>
    <transition name="ProjectView" :duration="500">
      <Step2 v-if="$root.do_navigation.view === 'ProjectView.step2'" />
    </transition>
    <transition name="ProjectView" :duration="500">
      <Step3 v-if="$root.do_navigation.view === 'ProjectView.step3'" />
    </transition>
    <transition name="ProjectView" :duration="500">
      <Step4 v-if="$root.do_navigation.view === 'ProjectView.step4'" />
    </transition>
    <transition name="ProjectView" :duration="500">
      <Step5 v-if="$root.do_navigation.view === 'ProjectView.step5'" />
    </transition>
    <transition name="ProjectView" :duration="500">
      <ProjectEnd v-if="$root.do_navigation.view === 'ProjectView.end'" />
    </transition>
    <CaptureView
      class="capture-camera"
      v-if="
        [
          'ProjectView.step1',
          'ProjectView.step2',
          'ProjectView.step3',
          'ProjectView.step4',
          'ProjectView.step5',
        ].includes($root.do_navigation.view)
      "
      @videoRecorded="this.updateIsVideoRecorded"
      @getBackToInitialState="this.reset"
      :saveVideo="this.saveRecordedVideo"
      :slugProjectName="$root.do_navigation.current_slugProjectName"
      :project="$root.currentProject"
      :read_only="!$root.state.connected"
      style="position: absolute"
    />
  </div>
</template>
<script>
import StepList from "./components/StepList.vue";
import AuthorList from "./components/AuthorList.vue";
import Workshop from "./components/Workshop.vue";
import Step1 from "./components/Step1.vue";
import Step2 from "./components/Step2.vue";
import Step3 from "./components/Step3.vue";
import Step4 from "./components/Step4.vue";
import Step5 from "./components/Step5.vue";
import CaptureView from "./CaptureView.vue";
import ProjectEnd from "./components/ProjectEnd.vue";
import BottomPathObjects from "./components/fixed_components/BottomPathObjects.vue";
import NextArrow from "./components/fixed_components/NextArrow.vue";
import BackgroundLogos from "./components/fixed_components/BackgroundLogos.vue";
export default {
  props: {
    slugProjectName: String,
    project: Object,
    read_only: Boolean,
  },
  data() {
    return {
      saveRecordedVideo: false,
      isVideoRecorded: false
    }
  },
  components: {
    StepList,
    AuthorList,
    Workshop,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    ProjectEnd,
    CaptureView,
    BottomPathObjects,
    NextArrow,
    BackgroundLogos,
  },

  created() {},
  mounted() {},
  beforeDestroy() {},

  watch: {},
  computed: {},
  methods: {
    reset: function() {
      this.saveRecordedVideo = this.isVideoRecorded = false;
    },
    updateSaveRecordedVideo: function() {
      this.saveRecordedVideo = true;
    },
    updateIsVideoRecorded: function() {
      this.isVideoRecorded = true;
    }
  }
};
</script>
<style>
.overlay-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.next-arrow {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.capture-camera {
  overflow-y: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 20vw;
  max-width: 35vw;
}
</style>