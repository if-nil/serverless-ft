<script setup>
import Split from "split-grid";
import { onMounted, ref } from "vue";
import MonacoEditor from './MonacoEditor.vue'
import { useCodeLayoutStore } from "../stores/index"

const layoutStore = useCodeLayoutStore()
const div2 = ref();
const div4 = ref();

onMounted(() => {
  Split({
    columnGutters: [
      {
        track: 1,
        element: div2.value,
      },
    ],
    rowGutters: [
      {
        track: 1,
        element: div4.value,
      },
    ]
  });
});
</script>

<template>
  <div class="grid">
    <div class="div1"></div>
    <div class="div2" ref="div2"></div>
    <div class="div3"><MonacoEditor /></div>
    <div class="div4" ref="div4"></div>
    <div class="div5"></div>
  </div>
</template>

<style scoped>
.grid {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 5px 3fr;
  grid-template-rows: 2fr 5px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: #eef0f2;
}
.div1 {
  grid-area: 1 / 1 / 4 / 2;
  background-color: #fdfdfe;
  border-radius: 5px;
}
.div2 {
  grid-area: 1 / 2 / 4 / 3;
  cursor: col-resize;
  background-color: #eef0f2;
}
.div3 {
  grid-area: 1 / 3 / 2 / 4;
  background-color: #fdfdfe;
  border-radius: 5px;
  margin-right: calc(var(--move-interval) * -1);
  margin-bottom: calc(var(--move-interval) * -1);
}
.div4 {
  grid-area: 2 / 3 / 3 / 4;
  grid-column: 2/-1;
  cursor: row-resize;
  background-color: #eef0f2;
}
.div5 {
  grid-area: 3 / 3 / 4 / 4;
  background-color: #fdfdfe;
  border-radius: 5px;
}
</style>
