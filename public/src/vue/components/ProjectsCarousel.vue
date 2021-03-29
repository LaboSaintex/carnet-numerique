<!--
    Carousel of project cards for selecting a project
    and continue at the current step of the selected project
-->
<template>
  <div class="projects-navigation">
    
    <PreviousProjectButton />
    
    <div class="projects-list">
      <ProjectCard />
      <ProjectCard class="middle"/>
      <ProjectCard />
    </div>
  
    <NextProjectButton />
  
  </div>
</template>
<script>
    // Import of the project card and the navigation buttons
    import ProjectCard from "./cards/ProjectCard.vue";
    import NextProjectButton from "./buttons/NextProjectButton.vue";
    import PreviousProjectButton from "./buttons/PreviousProjectButton.vue";

    export default {
        components: {
            ProjectCard,
            NextProjectButton,
            PreviousProjectButton
        }
    }
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

.projects-list  .middle {
  position: relative;
  top: 25px;
}
</style>