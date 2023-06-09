<template>
  <div class="author">
    <select
      @change="$emit('author-selected', cardIndex, selectedAuthor)"
      name="author"
      v-model="selectedAuthor"
    >
      <option value="" selected disabled>Auteurs</option>
      <option v-for="author in authors" :key="author" :value="author">
        {{ $root.store.authors[author].name }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    cardIndex: {
      Type: Number,
      required: true,
    },
    authors: {
      Type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedAuthor: "",
    };
  },
};
</script>
<style scoped>
.author {
  min-width: 35px;
  min-height: 35px;
  padding: 0px;
}

.author select {
  all: inherit;
  height: 10px;
  width: 100%;
  line-height: 1.2vw;
  border-radius: 0px;
  border: 1px solid black;
  font-size: 1.2vw;
  text-align: center;
  background-color: rgb(240, 240, 240);
}

.author select option[value=""] {
  text-align: center;
  font-weight: lighter;
}

.author .profile {
  margin: 0 auto 1vh auto;
  width: 80%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.2));
}

.author .profile:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.author .profile:hover {
  cursor: pointer;
}

.author .profile p {
  text-align: center;
  padding: 0 1%;
  font-size: 1.1vw;
  color: gray;
}
</style>
