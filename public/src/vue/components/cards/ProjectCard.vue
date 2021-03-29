<!--
    Component for a project card in the carousel
    of current projects 
-->
<template>

  <div class="project-card">
    <h6>Project Name</h6>
    <img
      src="https://eskipaper.com/images/black-4.jpg"
      class="project-preview"
    />
    <OpenProjectButton class="open-button" />
  </div>

</template>
<script>
// Imports the Open Project button of the card
import OpenProjectButton from "../buttons/OpenProjectButton.vue";

export default {
  components: {
    OpenProjectButton,
  },
};
</script>
<style scoped>
.project-card {
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
.project-card h6 {
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
</style>
