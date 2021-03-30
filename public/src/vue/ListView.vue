<template>
  <div class="centered">
    <!-- 
      Adding the fixed elements of the views
      such as the logos and the path animation
    -->
    <ProjectsCarousel :projectsList="this.list" />
    <BackgroundLogos class="overlay-svg" />
    <BottomPathObjects :currentView="$root.do_navigation.view" />
  </div>
</template>
<script>
import BackgroundLogos from "./components/fixed_components/BackgroundLogos.vue";
import BottomPathObjects from "./components/fixed_components/BottomPathObjects.vue";
import ProjectsCarousel from "./components/ProjectsCarousel.vue";

export default {
  data() {
    return {
      list: [
        {
          project: "PROJET 1",
          link: "https://eskipaper.com/images/black-4.jpg",
        },
        {
          project: "PROJET 2",
          link: "https://eskipaper.com/images/black-4.jpg",
        },
        {
          project: "PROJET 3",
          link: "https://eskipaper.com/images/black-4.jpg",
        },
        {
          project: "PROJET 4",
          link: "https://eskipaper.com/images/black-4.jpg",
        },
        {
          project: "PROJET 5",
          link: "https://eskipaper.com/images/black-4.jpg",
        },
      ],
    };
  },
  components: {
    BackgroundLogos,
    BottomPathObjects,
    ProjectsCarousel,
  },
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
</style>
