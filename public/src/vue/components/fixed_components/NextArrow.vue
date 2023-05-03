<template>
  <svg
    width="1706.6667"
    height="960"
    viewBox="0 0 1706.6667 960"
  >
    <g
      id="g10"
      @click="this.updateView"
      class="clickable"
      transform="matrix(1.3333333,0,0,-1.3333333,0,960)"
    >
      <g id="g1414" transform="translate(1167.6866,33.0772)">
        <path
          d="M 0,0 4.884,-2.931 V 27.144 L 0,24.213 Z"
          style="
            fill: #c6ae2e;
            fill-opacity: 1;
            fill-rule: nonzero;
            stroke: none;
          "
          id="path1416"
        />
      </g>
      <g id="g1418" transform="translate(1223.045,76.503)">
        <path
          d="M 0,0 -4.885,-2.931 V -15.76 L 0,-16.202 Z"
          style="
            fill: #c6ae2e;
            fill-opacity: 1;
            fill-rule: nonzero;
            stroke: none;
          "
          id="path1420"
        />
      </g>
      <g id="g1422" transform="translate(1226.3009,60.294)">
        <path
          d="M 0,0 C 0.002,-0.916 -0.382,-1.791 -1.058,-2.409 -1.733,-3.027 -2.639,-3.333 -3.551,-3.25 L -50.474,1.006 V -31.24 l 46.923,4.256 c 0.911,0.083 1.815,-0.221 2.49,-0.838 C -0.385,-28.438 0,-29.312 0,-30.226 V -45.5 L 31.835,-15.113 0,15.274 Z"
          style="
            fill: #f6f56b;
            fill-opacity: 1;
            fill-rule: nonzero;
            stroke: none;
          "
          id="path1424"
        />
      </g>
      <g id="g1426" transform="translate(1218.1603,16.795)">
        <path
          d="M 0,0 4.885,-2.931 V 13.273 L 0,12.83 Z"
          style="
            fill: #c6ae2e;
            fill-opacity: 1;
            fill-rule: nonzero;
            stroke: none;
          "
          id="path1428"
        />
      </g>
      <g id="g1430" transform="translate(1226.3009,14.794)">
        <path
          d="m 0,0 v 15.274 c 0,0.914 -0.385,1.788 -1.061,2.404 -0.675,0.617 -1.579,0.921 -2.49,0.838 L -50.474,14.26 V 46.506 L -3.551,42.25 c 0.912,-0.083 1.818,0.223 2.493,0.841 0.676,0.618 1.06,1.493 1.058,2.409 L 0,60.774 31.835,30.387 Z m -3.256,-0.93 -4.885,2.931 v 12.83 l 4.885,0.443 z m -4.885,59.708 4.885,2.931 V 45.507 l -4.885,0.442 z m -45.589,-43.425 -4.884,2.93 v 24.213 l 4.884,2.931 z m 53.226,50.404 c -0.529,0.502 -1.327,0.591 -1.954,0.218 l -7.359,-4.412 c -0.978,-0.59 -1.577,-1.648 -1.579,-2.79 V 46.236 c -44.377,4.03 -40.89,3.852 -41.544,3.456 l -7.352,-4.41 c -0.978,-0.592 -1.576,-1.649 -1.579,-2.791 V 18.283 c 0.004,-1.143 0.602,-2.201 1.581,-2.793 7.884,-4.729 7.589,-4.693 8.335,-4.641 l 40.559,3.686 V 1.998 c 0.002,-1.144 0.602,-2.201 1.58,-2.793 l 7.35,-4.409 c 0.626,-0.373 1.425,-0.283 1.953,0.219 l 34.597,33.016 c 0.643,0.615 1.007,1.465 1.007,2.355 0,0.89 -0.364,1.741 -1.007,2.355 z"
          style="
            fill: #231f20;
            fill-opacity: 1;
            fill-rule: nonzero;
            stroke: none;
          "
          id="path1432"
        />
      </g>
    </g>
  </svg>
</template>
<script>
  export default {
  props: {
    isVideoRecorded: {
      Type: Boolean,
      required: true
    },
    currentView: {
      Type: String,
      required: true
    }
  },
  data() {
    return {
      viewProgress: [
        "ProjectView", "ProjectView.authorList",
        "ProjectView.step1", "ProjectView.step2", "ProjectView.step3",
        "ProjectView.step4", "ProjectView.step5", "ProjectView.end"
      ]
    };
  },
  computed: {
    nextView: function() {
      let viewIndex = this.viewProgress.indexOf(this.currentView) + 1;
      if(viewIndex < this.viewProgress.length) {
        return this.viewProgress[viewIndex];
      }
      return this.viewProgress[0];
    }
  },
  methods: {
    updateView: function() {
        if(this.currentView === "ProjectView") {
          this.$root.do_navigation.view = this.$root.currentProject.last_unfinished_step;
        } else if(this.isVideoRecorded) {
          this.$emit('saveRecordedVideo', this.nextView);
          this.updateFoldersMetaFile();
        } else if(!this.currentView.includes("step")) {
          if(this.currentView === "ProjectView.authorList") {
            this.$eventHub.$emit('get-selected-authors');
          }
          this.$root.do_navigation.view = this.nextView;
          this.updateFoldersMetaFile();
        }
    },
    updateFoldersMetaFile: function() {
      console.log('Changing the Value in the Meta file of the project');
      this.$root.currentProject.last_unfinished_step = this.nextView;
      this.$root.editFolder({
        type: 'projects',
        slugFolderName: this.$root.currentProject.slugFolderName,
        data: this.$root.currentProject
      });
    }
  }
};
</script>
<style scoped>
svg {
  z-index: 1;
  position: absolute;
}
</style>