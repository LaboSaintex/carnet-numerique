<template>
<div>
  <TeamMessage class="team-message"/>
  <div class="grid-container centered">
    <AuthorCard 
    v-for="i in nOfAuthors" :key="i" 
    :authors="listOfAuthors"
    />
  </div>
</div>
</template>
<script>

import TeamMessage from "./viewmessages/TeamMessage.vue";
import AuthorCard from "./cards/AuthorCard.vue";

export default {
    data() {
        return {
          nOfAuthors: 8,
          listOfAuthors: [
            "auteur 1",
            "auteur 2",
            "auteur 3",
            "auteur 4",
            "auteur 5",
            "auteur 6",
            "auteur 7",
            "auteur 8",
          ]
        }
    },
    components: {
        TeamMessage,
        AuthorCard
    }
};
</script>

<style scoped>
.team-message {
  width: 100vw;
  height: 100vh;
}

.centered {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.grid-container {
  z-index: 99999;
  max-width: 70vw;
  width: 100;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1em 1em;
  grid-template-areas:
    ". . . ."
    ". . . .";
}
</style>