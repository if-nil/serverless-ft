<script setup>
import { onMounted, ref } from "vue";

import MonacoEditor from "./MonacoEditor.vue";
import NodeTree from "./NodeTree.vue";
import Split from "split-grid";

const div2 = ref();
const div4 = ref();
const props = defineProps({
  fileList: {
    type: Array,
    default: [],
  },
});
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
    ],
  });
});
</script>

<template>
  <div
    class="grid h-screen grid-cols-[1fr_5px_3fr] grid-rows-[2fr_5px_1fr] gap-x-[0px] gap-y-[0px] bg-[#eef0f2]"
  >
    <div class="rounded-[5px] bg-[#fdfdfe] [grid-area:1/1/4/2]">
      <NodeTree :value="props.fileList" />
    </div>
    <div class="bg-[#eef0f2] [grid-area:1/2/4/3]" ref="div2"></div>
    <div
      class="mr-[calc(var(--move-interval)*(-1))] mb-[calc(var(--move-interval)*(-1))] rounded-[5px] bg-[#fdfdfe] [grid-area:1/3/2/4]"
    >
      <MonacoEditor />
    </div>
    <div class="col-[2/-1] bg-[#eef0f2] [grid-area:2/3/3/4]" ref="div4"></div>
    <div class="rounded-[5px] bg-[#fdfdfe] [grid-area:3/3/4/4]"></div>
  </div>
</template>

<style scoped></style>
