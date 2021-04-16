<template>
  <div class="main-container">
    <WorkshopMessage class="message" />

    <div class="editable-bubble-container">
      <h1>{{ this.$root.currentProject.workshop_type }} </h1>
      <h2> {{ this.$root.currentProject.name }} </h2>
      <img src="../../../assets/editable-bubble.svg" />

      <textarea v-model="text" rows="5" cols="33">
        text
      </textarea>
    </div>
  </div>
</template>
<style scoped>
h1 {
  text-align: center;
  font-weight: bolder;
  font-size: 1.5em;
  margin: 0;
}
h2 {
  text-align: center;
  position: relative;
  margin: 0;
  left: 1%;
  font-weight: 800;
  font-size: 1.2em;
}
.main-container {
  width: 100vw;
  height: 100vh;
}
.main-container .message {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
}
.editable-bubble-container {
  position: relative;
  width: 30vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
img {
  width: 100%;
}
textarea {
  position: absolute;
  bottom: 10%;
  left: 0;
  width: 100%;
  height: 50%;
  padding: 0 5%;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  font-family: Cobol;
  font-weight: Cobol, normal;
  resize: none;
}
</style>
<script>
import WorkshopMessage from "./viewmessages/WorkshopMessage.vue";

export default {
  data() {
    return {
      text: "(description de l'atelier)"
    }
  },
  watch: {
    text: function() {
      this.$root.currentProject.description = this.text;
    }
  },
  components: {
    WorkshopMessage,
  },
};
</script>
