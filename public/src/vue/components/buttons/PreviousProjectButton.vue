<template>
  <div class="previous button"></div>
</template>
<style scoped>
/* buttons */
.button {
  position: relative;
  top: 10%;
  border-top: 1px solid gray;
  border-left: 1px solid gray;
  height: 20px;
  width: 20px;
}

.button:hover {
  filter: drop-shadow(5px 5px 3px black);
  cursor: pointer;
}
.previous {
  transform: rotateZ(-45deg);
}
</style>
