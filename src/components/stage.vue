<style>
  .container {
    background-color: #2e2e2e;
    cursor: default !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: auto;
  }
  .cursor-box__common {
    display: none !important;
    cursor: default;
  }
  .stage {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    /* border: 25px solid #000000; */
    /* background-color: #000000; */
    padding: 25px;
  }
  .stage .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    -webkit-mask-image: url(../assets/masks/Mask_LaunchpadPro.svg);
    mask-image: url(../assets/masks/Mask_LaunchpadPro.svg);
  }
</style>

<template>
  <div class="container" id="container">
    <div class="stage" id="stage">
      <img class="mask" src="../assets/img/grievousLady.jpg" />
      <div
        v-for="i in 10"
        style="display: flex; flex-direction: column; justify-content: center; align-items: center"
      >
        <div class="row">
          <div v-for="j in 10" style="display: flex">
            <div v-if="i !== 1 && i !== 10 && j !== 1 && j !== 10" class="light-container">
              <div class="light__cover"></div>
              <div class="light light--top light__color--top-4"></div>
              <div class="light light--bottom light__color--bottom-4"></div>
            </div>
            <div v-else-if="i !== j && Math.abs(i - j) !== 9" class="button-container">
              <div class="button__cover"></div>
              <div class="light light--button light--button-4"></div>
            </div>
            <div v-else style="width: 72px; height: 72px"></div>
            <div v-if="j === 1 || j === 9" class="gutter-y" style="width:20px"></div>
            <div v-else-if="j !== 10" class="gutter-y"></div>
          </div>
        </div>
        <div v-if="i === 1 || i === 9" class="gutter-x" style="height:20px"></div>
        <div v-else-if="i !== 10" class="gutter-x"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue"
</script>
