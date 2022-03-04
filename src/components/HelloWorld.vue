<style scoped>
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
</style>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <div>
    <input type="file" @change="getFile($event)" accept=".mid">
  </div>
</template>

<script setup lang="ts">
  import { Ref, ref } from "vue";
  import { MidiFile } from "../utils/midifile";

  const props = defineProps({
    msg: String
  })
  const lightEffects: Ref<Array<any>> = ref([]);

  function getFile(e: any) {
    const files: FileList = e.target.files;
    for (const file of files) {
      console.group('Opened:', file.name);
      var reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = async function() {
        const lightEffect = MidiFile(this.result as string);
        lightEffects.value.push(lightEffect);
        console.group('Parsed:')
        console.log(lightEffect);
        console.groupEnd();
        console.groupEnd();
      }
    }
  }
</script>