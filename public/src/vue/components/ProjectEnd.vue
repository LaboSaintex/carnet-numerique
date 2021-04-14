<!--
  Last View for displaying the film of the project
  Launched only after completing all the other steps
-->
<template>
  <div class="end-view">
    <transition name="ProjectView" :duration="500">
      <div>
        <EndMessage class="overlay-svg" />
        <div class="centered-button overlay-svg">
          <div @click="generateOrReadVideo" class="clickable">
            <EndButton />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import EndButton from "./buttons/EndButton.vue";
import EndMessage from "./viewmessages/EndMessage.vue";
export default {
  components: {
    EndButton,
    EndMessage,
  },
  data() {
    return {
      medias_slugs_in_order: new Array()
    }
  },
  methods: {
    /**
     * Methods that creates the videos from the 5 video medias
     * or if there's already a post folder then it reads the generated video
     */
    generateOrReadVideo: function () {
      if (!this.alreadyHasPublicationVideo) {
        this.newPublication();
        this.updatePublicationsFolder();
      }
      this.updatePublicationsFolder();
      this.$root.store.publications[this.$root.currentProject.slugFolderName.toLowerCase()]
      .medias_slugs = new Object();
      this.$root.openPublication(
        this.$root.currentProject.slugFolderName.toLowerCase()
      );
      this.loadAllPublicationMedias();
      // let publication = this.$root.store.publications[
      //   this.$root.currentProject.slugFolderName.toLowerCase()
      // ];
      //this.$root.current_publication = this.loadAllProjectMedias(publication);
    },

    /**
     * Creates a new publication video folder
     * if the currentProject doesn't have any
     * folder of it's name in _publications
     */
    newPublication: function (event) {
      if (this.$root.state.dev_mode === "debug") {
        console.log("METHODS • CreatePublication: newPublication");
      }
      let name = this.$root.currentProject.slugFolderName.toLowerCase();

      let publidata = {
        name,
        authors: this.$root.currentProject.authors,
        keywords: this.$root.currentProject.keywords,
        template: "video_assemblage"
      };

      this.$eventHub.$on(
        "socketio.folder_created_or_updated",
        this.newPublicationCreated
      );
      this.$root.createFolder({ type: "publications", data: publidata });
    },

    newPublicationCreated: function (pdata) {
      if (pdata.id === this.$root.justCreatedFolderID) {
        this.$eventHub.$off(
          "socketio.folder_created_or_updated",
          this.newPublicationCreated
        );
        this.$root.justCreatedFolderID = false;
        this.$nextTick(() => {
          //this.$emit("close", "");
        });
      }
    },

    updatePublicationsFolder: function () {
      this.$socketio.listFolder({
        type: "publications",
        slugFolderName: "_publications",
      });
    },


    /**
     * Load all the current Projects video medias
     * into the current_publication medias
     */
    loadAllPublicationMedias: function() {
      Object.keys(this.$root.currentProject.medias).forEach(fileName => {
        this.addMedia({
          slugProjectName: this.$root.currentProject.slugFolderName.toLowerCase(),
          metaFileName: this.$root.currentProject.medias[fileName].metaFileName
        });
      });
      this.$root.current_publication.medias_slugs = this.medias_slugs_in_order;
    },

    /**
     * Method for adding a media to the current video edition post
     * takes a json of the project slug name and the metaFileName of the video
     * media to add.
     */
    addMedia({ slugProjectName, metaFileName }) {
      if (this.$root.state.dev_mode === "debug") {
        console.log(`METHODS • Publication: addMedia with
        slugProjectName = ${slugProjectName} and metaFileName = ${metaFileName}`);
      }

      const desired_filename = metaFileName;

      this.$eventHub.$on("socketio.media_created_or_updated", (d) => {
        this.$eventHub.$off("socketio.media_created_or_updated");

        this.medias_slugs_in_order.push({
          slugMediaName: d.metaFileName,
        });

        this.$root.editFolder({
          type: "publications",
          slugFolderName: slugProjectName,
          data: {
            medias_slugs: this.medias_slugs_in_order,
          },
        });
      });

      this.$root.createMedia({
        slugFolderName: this.$root.current_publication.slugFolderName,
        type: "publications",
        additionalMeta: {
          slugProjectName,
          desired_filename,
          slugMediaName: metaFileName,
        },
      });
    },

    updateMediasPubli() {
      if (this.$root.state.dev_mode === "debug") {
        console.log(`METHODS • Publication: updateMediasPubli`);
      }

      // get list of publications items
      let publi_medias = [];
      let missingMedias = [];

      const currentProjectMedias = Object.keys(
        this.$root.currentProject.medias
      ).map((i) => this.$root.currentProject.medias[i]);
      console.log(currentProjectMedias);
      currentProjectMedias.map((item) => {
        const metaFileName = item.slugMediaName;

        console.log("TEST 1");

        if (
          !this.$root.current_publication.medias.hasOwnProperty(metaFileName)
        ) {
          // error : a media referenced in medias_slugs is not in this.publication.medias
          return;
        }

        const _media = this.$root.current_publication.medias[metaFileName];

        console.log("TEST 2");

        // for each, get slugFolderName and metaFileName
        if (
          !_media.hasOwnProperty("slugProjectName") ||
          !_media.hasOwnProperty("metaFileName")
        ) {
          return;
        }

        const slugProjectName = _media.slugProjectName;
        const slugMediaName = _media.slugMediaName;

        // find in store if slugFolderName exists
        if (!this.$root.store.projects.hasOwnProperty(slugProjectName)) {
          console.error(
            `Missing project in store — not expected : ${slugProjectName}`
          );
          console.error(
            `Medias from project was probably added to the publication before it was removed altogether.`
          );
          return;
        }

        // find in store if metaFileName exists
        const project_medias = this.$root.store.projects[slugProjectName]
          .medias;
        if (!project_medias.hasOwnProperty(slugMediaName)) {
          console.log(`Some medias missing from client`);
          missingMedias.push({
            slugFolderName: slugProjectName,
            metaFileName: slugMediaName,
          });
        } else {
          let meta = JSON.parse(JSON.stringify(project_medias[slugMediaName]));

          if (meta.hasOwnProperty("_isAbsent") && meta._isAbsent) {
            console.error(
              `Missing media in store — not expected : ${slugProjectName} / ${slugMediaName}`
            );
            console.error(
              `Media was probably added to the publication before it was removed.`
            );
            return;
          }

          meta.slugProjectName = slugProjectName;
          meta.publi_meta = JSON.parse(JSON.stringify(_media));

          publi_medias.push(meta);
          return;
        }
      });

      console.log(
        `Finished building media list. Missing medias: ${missingMedias.length}`
      );

      // send list of medias to get
      if (missingMedias.length > 0) {
        this.$root.listSpecificMedias({
          type: "projects",
          medias_list: missingMedias,
        });
      }

      this.$root.current_publication.medias = publi_medias;
    },
  },
  computed: {
    alreadyHasPublicationVideo: function () {
      return (
        Object.keys(this.$root.store.publications).indexOf(
          this.$root.currentProject.slugFolderName.toLowerCase()
        ) != -1
      );
    },
  },
  created() {
    if (this.$root.do_navigation.current_slugProjectName) {
      this.$socketio.listFolder({
        type: "projects",
        slugFolderName: this.$root.currentProject.slugFolderName,
      });
      this.$socketio.listMedias({
        type: "projects",
        slugFolderName: this.$root.currentProject.slugFolderName,
      });
    }
  },
};
</script>
<style>
.clickable {
  z-index: 2;
}
.overlay-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.end-view .centered-button {
  display: flex;
  align-items: center;
  justify-content: center;
}
.end-view .centered-button svg {
  width: auto;
  height: 12%;
  z-index: 2;
}
</style>
