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
      medias_slugs_in_order: new Array(),
      video_request_status: "",
      link_to_video: "",
      exported_video_name: "",
      show_video_palyer: false,
      publication_medias: [],
      publication: {}
    };
  },
  methods: {
    /**
     * Methods that creates the videos from the 5 video medias
     * or if there's already a post folder reads the generated video
     */
    generateOrReadVideo: function () {
      //if (!this.alreadyHasPublicationVideo) {
        this.newPublication();
        this.updatePublicationsFolder();
        this.$root.openPublication(
          this.$root.currentProject.slugFolderName.toLowerCase()
        );
        this.publication = this.$root.current_publication;
        this.updateMediasPubli();
        this.loadAllPublicationMedias();
                this.$root.editFolder({
          type: "publications",
          slugFolderName: this.$root.current_publication.name,
          data: {
            medias_slugs: this.medias_slugs_in_order,
          },
        });
        //this.updateMediasPubli();
        
        this.downloadVideo();
      // } else {
      // }
    },

    /**
     * Creates a new publication video folder
     * if the currentProject doesn't have any
     * folder of it's lowered case name in _publications
     */
    newPublication: function (event) {
      if (this.$root.state.dev_mode === "debug") {
        console.log("METHODS • CreatePublication: newPublication");
      }
      let publidata = {
        name: this.$root.currentProject.slugFolderName.toLowerCase(),
        authors: this.$root.currentProject.authors,
        keywords: this.$root.currentProject.keywords,
        template: "video_assemblage",
        style: "standard",
        medias: new Object()
      };
      this.$eventHub.$on(
        "socketio.folder_created_or_updated",
        this.newPublicationCreated
      );
      this.$root.createFolder({ type: "publications", data: publidata });
    },

    /**
     * 
     */
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

    /**
     * Adds the generated temporary media video publication
     * to the project folder as a new media video with a name starting with the project
     * name
     */
    addTempMediaToFolder() {
      let caption =
        this.$t("cooking_pot") +
        " / " +
        this.$root.currentProject.slugFolderName;

      this.$socketio.addTempMediaToFolder({
        from: {
          media_filename: this.exported_video_name,
          type: "publications",
        },
        to: {
          slugFolderName: this.$root.currentProject.slugFolderName,
          type: "projects",
        },
        additionalMeta: {
          caption,
          authors: this.$root.settings.current_author.hasOwnProperty("name")
            ? [{ name: this.$root.settings.current_author.name }]
            : "",
        },
      });
    },

    /**
     * Load all the current Projects video medias
     * into the current_publication medias
     */
    loadAllPublicationMedias: function () {
      Object.keys(this.$root.currentProject.medias).forEach((fileName) => {
        this.addMedia({
          slugProjectName: this.$root.currentProject.slugFolderName.toLowerCase(),
          metaFileName: this.$root.currentProject.medias[fileName].metaFileName,
        });
      });
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

      // this.$eventHub.$on("socketio.media_created_or_updated", d => {
      //   this.$eventHub.$off("socketio.media_created_or_updated");

      //   console.log("D PARAM \n");
      //   console.log(d);

      //   this.medias_slugs_in_order.push({
      //     slugMediaName: d.metaFileName,
      //   });

      //   this.$root.editFolder({
      //     type: "publications",
      //     slugFolderName: slugProjectName,
      //     data: {
      //       medias_slugs: this.medias_slugs_in_order,
      //     },
      //   });
      // });

      this.$root.createMedia({
        slugFolderName: this.$root.current_publication.slugFolderName,
        type: "publications",
        additionalMeta: {
          slugProjectName: this.$root.currentProject.slugFolderName,
          desired_filename,
          slugMediaName: metaFileName,
          duration: 1,
        },
      });

        this.medias_slugs_in_order.push({
          slugMediaName: desired_filename,
        });
      this.updateAllFolders();
      //this.updateMediasPubli();
    },

    downloadVideo() {
      if (this.$root.state.dev_mode === "debug") {
        console.log(`METHODS • ExportVideoPubli: downloadVideo`);
      }

      this.$eventHub.$once(
        "socketio.publication.videoIsGenerated",
        this.videoPubliIsGenerated
      );
      this.$eventHub.$once(
        "socketio.publication.videoFailedToGenerate",
        this.videoPubliFailedToGenerate
      );

      this.$socketio.downloadVideoPubli({
        slugPubliName: this.$root.current_publication.name,
      });
      this.video_request_status = "waiting_for_server";
    },

    videoPubliIsGenerated({ videoName }) {
      if (this.$root.state.dev_mode === "debug") {
        console.log(`METHODS • Publication: videoPubliIsGenerated`);
      }

      this.$eventHub.$off("socketio.publication.videoFailedToGenerate");

      this.video_request_status = "generated";
      this.link_to_video =
        window.location.origin + "/publication/video/" + videoName;
      this.exported_video_name = videoName;
      this.addTempMediaToFolder();
    },

    videoPubliFailedToGenerate() {
      if (this.$root.state.dev_mode === "debug") {
        console.log(`METHODS • Publication: videoPubliFailedToGenerate`);
      }

      this.$eventHub.$off("socketio.publication.videoIsGenerated");

      this.video_request_status = "failed";
    },

    updateMediasPubli() {
      if (this.$root.state.dev_mode === 'debug') {
        console.log(`METHODS • Publication: updateMediasPubli`);
      }

      if(!this.publication.hasOwnProperty('medias') || Object.keys(this.publication.medias).length === 0) {
        this.publication_medias = [];        
        return;
      }
      
      // get list of publications items
      let publi_medias = [];
      let missingMedias = [];


      if(this.medias_slugs_in_order.length === 0) {
        this.publication_medias = [];
        return;
      }

      this.medias_slugs_in_order.map(item => {
        const metaFileName = item.slugMediaName;

        if(!this.publication.medias.hasOwnProperty(metaFileName)) {
          // error : a media referenced in medias_slugs is not in this.publication.medias
          return;
        }

        const _media = this.publication.medias[metaFileName];

        // for each, get slugFolderName and metaFileName
        if(!_media.hasOwnProperty('slugProjectName') || !_media.hasOwnProperty('metaFileName')) {
          return;
        }

        const slugProjectName = _media.slugProjectName;
        const slugMediaName = _media.slugMediaName;

        // find in store if slugFolderName exists
        if(!this.$root.store.projects.hasOwnProperty(slugProjectName)) {
          console.error(`Missing project in store — not expected : ${slugProjectName}`);
          console.error(`Medias from project was probably added to the publication before it was removed altogether.`)
          return;
        }

        // find in store if metaFileName exists
        const project_medias = this.$root.store.projects[slugProjectName].medias;
        if(!project_medias.hasOwnProperty(slugMediaName)) {
          console.log(`Some medias missing from client`);
          missingMedias.push({ slugFolderName: slugProjectName, metaFileName: slugMediaName });
        } else {
          let meta = JSON.parse(JSON.stringify(project_medias[slugMediaName]));

          if(meta.hasOwnProperty('_isAbsent') && meta._isAbsent) {
            console.error(`Missing media in store — not expected : ${slugProjectName} / ${slugMediaName}`);
            console.error(`Media was probably added to the publication before it was removed.`);
            return;
          }

          meta.slugProjectName = slugProjectName;
          meta.publi_meta = JSON.parse(JSON.stringify(_media));
            
          publi_medias.push(meta);
          return;
        }
      });

      console.log(`Finished building media list. Missing medias: ${missingMedias.length}`);

      // send list of medias to get
      if(missingMedias.length > 0) {
        this.$root.listSpecificMedias({
          type: 'projects',
          medias_list: missingMedias
        });
      }

      this.publication_medias = publi_medias;        
    },

    // updateMediasPubli() {
    //   if (this.$root.state.dev_mode === "debug") {
    //     console.log(`METHODS • Publication: updateMediasPubli`);
    //   }

    //   // get list of publications items
    //   let publi_medias = [];
    //   let missingMedias = [];

    //   const currentProjectMedias = Object.keys(
    //     this.$root.currentProject.medias
    //   ).map((i) => this.$root.currentProject.medias[i]);
    //   console.log(currentProjectMedias);
    //   currentProjectMedias.map((item) => {
    //     const metaFileName = item.metaFileName;

    //     const _media = this.$root.currentProject.medias[metaFileName];

    //     console.log("TEST 2");

    //     // for each, get slugFolderName and metaFileName
    //     if (
    //       !_media.hasOwnProperty("slugProjectName") ||
    //       !_media.hasOwnProperty("metaFileName")
    //     ) {
    //       return;
    //     }

    //     const slugProjectName = _media.slugProjectName;
    //     const slugMediaName = _media.slugMediaName;

    //     // find in store if slugFolderName exists
    //     if (!this.$root.store.projects.hasOwnProperty(slugProjectName)) {
    //       console.error(
    //         `Missing project in store — not expected : ${slugProjectName}`
    //       );
    //       console.error(
    //         `Medias from project was probably added to the publication before it was removed altogether.`
    //       );
    //       return;
    //     }

    //     // find in store if metaFileName exists
    //     const project_medias = this.$root.store.projects[slugProjectName]
    //       .medias;
    //     if (!project_medias.hasOwnProperty(slugMediaName)) {
    //       console.log(`Some medias missing from client`);
    //       missingMedias.push({
    //         slugFolderName: slugProjectName,
    //         metaFileName: slugMediaName,
    //       });
    //     } else {
    //       let meta = JSON.parse(JSON.stringify(project_medias[slugMediaName]));

    //       if (meta.hasOwnProperty("_isAbsent") && meta._isAbsent) {
    //         console.error(
    //           `Missing media in store — not expected : ${slugProjectName} / ${slugMediaName}`
    //         );
    //         console.error(
    //           `Media was probably added to the publication before it was removed.`
    //         );
    //         return;
    //       }

    //       meta.slugProjectName = slugProjectName;
    //       meta.publi_meta = JSON.parse(JSON.stringify(_media));

    //       publi_medias.push(meta);
    //       return;
    //     }
    //   });

    //   console.log(
    //     `Finished building media list. Missing medias: ${missingMedias.length}`
    //   );

    //   // send list of medias to get
    //   if (missingMedias.length > 0) {
    //     this.$root.listSpecificMedias({
    //       type: "projects",
    //       medias_list: missingMedias,
    //     });
    //   }

    //   this.$root.current_publication.medias = publi_medias;
    // },

    updateAllFolders: function() {
      this.updateProjectFolders();
      this.updateProjectMedias();
      this.updatePublicationsFolder();
    },

    /**
     * Updates the Folders of the current Project
     */
    updateProjectFolders: function () {
      this.$socketio.listFolder({
        type: "projects",
        slugFolderName: this.$root.currentProject.slugFolderName,
      });
    },

    /**
     * Updates the medias of the current
     * project folder
     */
    updateProjectMedias: function () {
      this.$socketio.listMedias({
        type: "projects",
        slugFolderName: this.$root.currentProject.slugFolderName,
      });
    },

    /**
     * Updates the content of the _publications folder
     * containing the content of all the video making recipes meta files
     */
    updatePublicationsFolder: function () {
      this.$socketio.listFolder({
        type: "publications",
        slugFolderName: "_publications",
      });
    },
  },
  computed: {
    /**
     * Checks if the current project has already a publication project
     * in the _publication folder
     */
    alreadyHasPublicationVideo: function () {
      return (
        Object.keys(this.$root.store.publications).indexOf(
          this.$root.currentProject.slugFolderName.toLowerCase()
        ) != -1
      );
    },

    /**
     * Checks if the current project has already a mixed video
     * in that case we only fetch and read the video
     */
    hasPublicationVideo: function () {
      Object.keys(this.$root.currentProject.medias).forEach((fileName) => {
        if (
          this.$root.currentProject.medias[fileName].media_filename
            .split(".")
            .pop() == "mp4"
        ) {
          return true;
        }
      });
      return false;
    },
  },
  created() {
    if (this.$root.do_navigation.current_slugProjectName) {
      this.updateProjectFolders();
      this.updateProjectMedias();
      this.updatePublicationsFolder();
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
