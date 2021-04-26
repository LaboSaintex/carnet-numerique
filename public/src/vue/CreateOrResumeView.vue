<template>
  <div v-if="$root.do_navigation.view === 'CreateOrResumeView'">
    <BackgroundLogos class="overlay" />
    <BottomPathObjects v-if="$root.do_navigation.view === 'CreateOrResumeView'" class="overlay" />

    <div class="buttons-container">
      <div @click="createAndOpenProject">
        <CreateProjectButton class="buttons"/>
      </div>
      <div @click="$root.do_navigation.view = 'ListView'">
        <ResumeProjectButton class="buttons" />
      </div>
    </div>

  </div>
</template>
<script>
import CreateProjectButton from "./components/buttons/CreateProjectButton.vue";
import ResumeProjectButton from "./components/buttons/ResumeProjectButton.vue";
import BackgroundLogos from "./components/fixed_components/BackgroundLogos.vue";
import BottomPathObjects from "./components/fixed_components/BottomPathObjects.vue";
export default {
  components: {
    CreateProjectButton,
    ResumeProjectButton,
    BackgroundLogos,
    BottomPathObjects,
  },
  data() {
    return {
    }
  },
  methods: {
    createAndOpenProject: function() {
      this.newProject();
    },
    newProject: function(event) {
      console.log('newProject');
      let projectdata = {
        name: this.$root.store.config.workshop_title,
        password: '',
        authors: [],
        keywords: this.$root.store.config.workshop_tags,
        age_group: this.$root.store.config.workshop_age_group,
        number_of_authors: this.$root.store.config.workshop_members,
        last_unfinished_step: "ProjectView.authorList",
        description: ""
      };
      
      console.log(projectdata);
      function getAllProjectNames() {
        let allProjectsName = [];
        for (let slugProjectName in window.store.projects) {
          let projectName = window.store.projects[slugProjectName].name;
          allProjectsName.push(projectName);
        }
        return allProjectsName;
      }
      let allProjectsName = getAllProjectNames();
      // check if project name (not slug) already exists
      if (allProjectsName.indexOf(projectdata.name) >= 0) {
        // invalidate if it does
        this.$alertify
          .closeLogOnClick(true)
          .delay(4000)
          .error(this.$t('notifications.project_name_exists'));
        return false;
      }
      this.$eventHub.$on('socketio.folder_created_or_updated', this.newFolderCreated);
      this.$root.createFolder({ type: 'projects', data: projectdata });
    },
    newFolderCreated: function(fdata) {
      if(fdata.id === this.$root.justCreatedFolderID) {
        this.$eventHub.$off('socketio.folder_created_or_updated', this.newFolderCreated);
        this.$root.justCreatedFolderID = false;
        this.$nextTick(() => {
          this.$emit('close', '');
          this.$root.openProject(fdata.slugFolderName);
        });
                
      }
    }
  }
};
</script>
<style scoped>
.buttons {
  width: 25vw;
  z-index: 2;
}
.buttons:hover {
  cursor: pointer;
}
.overlay {
  width: 100vw;
  height: 100vh;
}
.buttons-container {
  display: flex;
  width: 70vw;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>