<template>
  <div @click="$emit('right-scroll')" class="next carousel-button"></div>
</template>
<script>
export default {
}
</script>
<style scoped>
/* buttons */
.carousel-button {
  position: relative;
  top: 10%;
  border-top: 1px solid gray;
  border-left: 1px solid gray;
  height: 20px;
  width: 20px;
  z-index: 1;
}

.carousel-button:hover {
  filter: drop-shadow(5px 5px 3px black);
  cursor: pointer;
}
.next {
  transform: rotateZ(135deg);
}
</style>
