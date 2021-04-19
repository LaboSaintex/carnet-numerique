<template>
  <div class="author">
    <div class="profile">
      <p>Clique pour prendre une photo !</p>
    </div>
    <select name="author">
      <option value="" selected disabled>[prénom]</option>
      <option 
        v-for="author in authors" :key="author" 
        value="author">
        {{ author }} 
      </option>
    </select>
  </div>
</template>
<script>
export default {
    props: {
        authors: {
            Type: Array,
            required: true
        }
    }
}
</script>
<style scoped>
.author {
  min-width: 50px;
  min-height: 50px;
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
  border-bottom-left-radius:-50px;
  border-bottom-right-radius:-50px;
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