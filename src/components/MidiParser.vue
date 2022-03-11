<style scoped>
</style>

<template>
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
    const files: Array<File> = e.target.files;
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