<template>
<div>
  <TeamMessage class="team-message"/>
  <div class="grid-container centered"
    :class="{ 'wide-grid' :nOfAuthors > 8}"
  >
    <AuthorCard
      @author-selected="updateSelectedAuthors"
      v-for="i in nOfAuthors" :key="i" 
      :cardIndex="i"
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
          nOfAuthors: this.$root.currentProject.number_of_authors
        }
    },
    components: {
        TeamMessage,
        AuthorCard
    },
    methods: {
      updateSelectedAuthors: function(cardIndex, selectedAuthor) {
        this.selectedAuthors[cardIndex] = selectedAuthor;
      }
    },
    mounted() {
        this.$eventHub.$once('get-selected-authors', () => {
          this.$root.currentProject.authors = [];
          this.selectedAuthors.forEach(author => {
            console.log(author);
            if(author != "") {
              this.$root.currentProject.authors.splice(author, 0, {"name": this.$root.store.authors[author].name});
            }
          });
        });
    },
    computed: {
      /**
       * List of the selected authors of the grid cards
       */
      selectedAuthors: function() {
        let authors = [];
        for(let i = 1; i <= this.nOfAuthors; i++) {
          authors[i] = "";
        }
        return authors;
      },
      /**
       * gets the list of the available authors of the currentProject
       * of a given age group
       */
      listOfAuthors: function() {
        if(this.$root.currentProject.age_group === "ALL") {
          return this.$root.allAuthors.map(author => author.slugFolderName);
        }
        
        let authorsOfAgeGroup = [];
        let currentAuthorAge;
        let ageBoundaries = this.$root.currentProject.age_group.split("-");

        Object.keys(this.$root.store.authors).forEach(author => {
          currentAuthorAge = new Date() - Date.parse(this.$root.store.authors[author].birth_date);
          // gets the age in years
          currentAuthorAge = Math.floor(currentAuthorAge / 31536000000);
          if(this.$root.currentProject.age_group.length === 5) {
            if(currentAuthorAge >= ageBoundaries[0] && currentAuthorAge <= ageBoundaries[1]) {
              authorsOfAgeGroup.push(author);
            }
          } else {
            if(currentAuthorAge >= 18) {
              authorsOfAgeGroup.push(author);
            }
          }
        });
        return authorsOfAgeGroup;
      }
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
  z-index: 2;
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

.wide-grid {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
</style>