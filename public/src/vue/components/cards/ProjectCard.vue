<!--
    Component for a project card in the carousel
    of current projects 
-->
<template>

  <div class="project-card">
    <h5>{{ projectName }}</h5>
    <img
      :src="previewImageLink"
      class="project-preview"
    />
    <div @click="this.viewProject">
      <OpenProjectButton class="open-button" />
    </div>
  </div>

</template>
<script>
// Imports the Open Project button of the card
import OpenProjectButton from "../buttons/OpenProjectButton.vue";

export default {
  props: {
    projectName: String,
    previewImageLink: String,
    slugName: String
  },
  methods: {
    viewProject() {
      this.$root.do_navigation.current_slugProjectName = this.slugName;
      this.$root.do_navigation.view = "ProjectView";
    }
  },
  components: {
    OpenProjectButton,
  }
};
</script>
<style scoped>
.project-card {
  z-index: 1;
  margin: 0 5%;
  background-color: white;
  padding-left: 9px;
  padding-right: 9px;
  padding-bottom: 2%;
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0));
  display: flex;
  flex-flow: column nowrap;
}

/* project preview */
.project-card .project-preview {
  width: 90%;
  max-height: 300px;
  min-height: 60px;
  min-width: 90px;
  margin: 0 auto 1rem auto;
}

/* titles */
.project-card h5 {
  text-align: center;
  font-family: Cobol;
  position: relative;
  top: -9px;
}

/* open project button */
.project-card .open-button {
  width: 100%;
  height: auto;
  text-align: center;
}
/* open project button */
.project-card svg {
  z-index: 2;
}
.project-card  svg:hover {
  cursor: pointer;
}
</style>