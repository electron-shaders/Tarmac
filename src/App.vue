<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>

<template>
  <div class="container">
    <Stage></Stage>
    <div class="cursor-box__common cursor-box" :style="cursorStyle">
      <div class="cursor" />
    </div>
    <div class="cursor-box__common cursor__follower-box" :style="cursorFoStyle">
      <div class="cursor__follower" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import Stage from "./components/stage.vue";

  const cursorStyle = ref("transform: none");
  const cursorFoStyle = ref("transform: none");

  function mouseMove(e: { clientX: Number; clientY: Number; }) {
    cursorStyle.value = `transform: translate3d(${e.clientX}px, ${e.clientY}px, 150px)`;
    cursorFoStyle.value = `transform: translate3d(${e.clientX}px, ${e.clientY}px, 40px)`;
  }

  onMounted(() => {
    document.addEventListener(`mousemove`, mouseMove);
  })

  onBeforeUnmount(() => {
    document.removeEventListener(`mousemove`, mouseMove);
  })
</script>
