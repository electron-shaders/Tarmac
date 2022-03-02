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
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <div class="cursor-box__common cursor-box" :style="cursorStyle">
      <div class="cursor" />
    </div>
    <div class="cursor-box__common cursor__follower-box" :style="cursorFoStyle">
      <div class="cursor__follower" />
    </div>
  </div>
</template>

<script lang="ts">
  import HelloWorld from "./components/HelloWorld.vue";

  export default {
    name: "App",
    data() {
      return {
        cursorStyle: "transform: none",
        cursorFoStyle: "transform: none",
      };
    },
    methods: {
      mouseMove(e) {
        this.cursorStyle = `transform: translate3d(${e.clientX}px, ${e.clientY}px, 150px)`;
        this.cursorFoStyle = `transform: translate3d(${e.clientX}px, ${e.clientY}px, 40px)`;
      },
    },
    mounted() {
      document.addEventListener(`mousemove`, this.mouseMove);
    },
    beforeUnmount() {
      document.removeEventListener(`mousemove`, this.mouseMove);
    },
    components: {
      HelloWorld,
    },
  };
</script>
