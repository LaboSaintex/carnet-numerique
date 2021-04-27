<template>
  <div v-if="$root.do_navigation.view === 'ListView'" class="centered">
    <!-- 
      Adding the fixed elements of the views
      such as the logos and the path animation
    -->
    <div class="search-bar-container">
      <label>Rechercher  </label>
      <div>
        <input type="text" name="search" placeholder="ex: Creation de ..." v-model="search"/>
        <ul v-if="projects.length != 0 && search != ''">
          <li 
          @click="search = project" 
          v-for="(project, i) in suggestionsList" :key="i"
          >{{ project }}</li>
        </ul>
      </div>
    </div>
    <ProjectsCarousel :projectsList="projects" />
    <BackgroundLogos class="overlay-svg" />
    <BottomPathObjects :currentView="$root.do_navigation.view" />
  </div>
</template>
<script>
import BackgroundLogos from "./components/fixed_components/BackgroundLogos.vue";
import BottomPathObjects from "./components/fixed_components/BottomPathObjects.vue";
import ProjectsCarousel from "./components/ProjectsCarousel.vue";

export default {
  components: {
    BackgroundLogos,
    BottomPathObjects,
    ProjectsCarousel,
  },
  data() {
    return {
      search: "",
    }
  },
  computed: {
    suggestionsList: function() {
      let workshops = [];
      this.projects.forEach(project => {
        workshops.push(project.workshop_type);
      });
      return Array.from(new Set(workshops));
    },
    projects: function() {
      if(this.search === "") {
        return this.$root.projects_that_are_accessible;
      }
      console.log("SEARCH PROJECT");
      let projectsList = [];
      this.$root.projects_that_are_accessible.forEach(project => {
        if(project.workshop_type != null) {
          if(project.workshop_type.toLowerCase().includes(this.search.toLowerCase())) {
            projectsList.push(project);
          }
        }
      });
      return projectsList;
    }
  }
};
</script>
<style scoped>
.centered {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex: row nowrap;
  align-items: center;
  justify-content: center;
}
.overlay-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.search-bar-container {
  position: fixed;
  top: 5vh;
  display: flex;
  flex-flow: row nowrap;
  z-index: 3;
}

.search-bar-container label {
  font-family: Cobol;
  text-transform: inherit;
  font-weight: normal;
  font-size: xx-large;
  margin-right: 20px;
}
input[type="text"] {
  border: 2px solid black;
  border-radius: 0px;
  background-color: rgb(200, 200, 200);
}
ul {
  list-style: none;
  margin: 0px;
  text-align: right;
  overflow-y: scroll;
  background-color: white;
  border: 1px solid black;
}
ul li {
  margin-top: 5px;
}
</style>
