<!--
    Carousel of project cards for selecting a project
    and continue at the current step of the selected project
    Navigation unlocked when there are >= 3 projects.
-->
<template>
  <div class="projects-navigation">
    <PreviousProjectButton
      @left-scroll="this.scrollLeft"
      v-show="this.canScroll"
    />

    <div class="projects-list">
      <ProjectCard
        v-for="(p, index) in viewedProjects"
        :key="index"
        :projectName="p.project"
        :previewImageLink="p.link"
        :class="{ card: true, middle: index === 1 && canScroll}"
      />
    </div>

    <NextProjectButton
      @right-scroll="this.scrollRight"
      v-show="this.canScroll"
    />
  </div>
</template>
<script>
// Import of the project card and the navigation buttons
import ProjectCard from "./cards/ProjectCard.vue";
import NextProjectButton from "./buttons/NextProjectButton.vue";
import PreviousProjectButton from "./buttons/PreviousProjectButton.vue";

export default {
  props: {
    // List of all the current Projects data fetched from a server
    projectsList: {
      Type: Array,
    },
  },
  data() {
    return {
      middleProject: Math.floor(this.projectsList.length / 2),
    };
  },
  components: {
    ProjectCard,
    NextProjectButton,
    PreviousProjectButton,
  },
  methods: {
    /**
     * Bounds the value of the middleProject index
     * when it gets out of the projectsList bounds
     */
    boundMiddleValue(newMiddle) {
      if (newMiddle < 0) {
        return this.projectsList.length - 1;
      }
      if (newMiddle >= this.projectsList.length) {
        return 0;
      }
      return newMiddle;
    },
    scrollLeft: function () {
      this.middleProject = this.boundMiddleValue(this.middleProject + 1);
    },
    scrollRight: function () {
      this.middleProject = this.boundMiddleValue(this.middleProject - 1);
    },
  },
  computed: {
    /**
     * Checks if the carousel can be scrolled
     */
    canScroll: function () {
      if (this.projectsList.length >= 3) {
        return true;
      }
      return false;
    },
    /**
     * The carousel always display three items
     * returns the list of the three items that will be displayed
     * in the carousel
     */
    viewedProjects: function () {
      if (this.canScroll) {
        return [
          this.projectsList[this.middleProject == 0 ? this.projectsList.length - 1 : this.middleProject - 1],
          this.projectsList[this.middleProject],
          this.projectsList[this.middleProject == this.projectsList.length - 1 ? 0 : this.middleProject + 1],
        ];
      }
      return this.projectsList;
    },
  },
};
</script>
<style scoped>
/* Projects navigation */

.projects-navigation {
  margin: 0 auto;
  height: 40%;
  max-width: 70%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.projects-list {
  margin: 0 auto;
  width: 100%;
  max-width: 75vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
}

.projects-list .middle {
  position: relative;
  top: 25px;
}
</style>
