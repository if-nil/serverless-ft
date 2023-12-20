<template>
  <n-split
    direction="horizontal"
    class="h-screen"
    :default-size="0.2"
    :max="1"
    :min="0"
  >
    <template #1> <Tree :fileList="props.fileList" /> </template>
    <template #2>
      <div class="h-full">
        <MonacoEditor />
      </div>
    </template>
    <template #resize-trigger>
      <div
        class="h-full bg-[#77ba41] flex justify-center items-center rounded-[8px]"
      ></div>
    </template>
  </n-split>
</template>

<style scoped></style>
<script setup>
import { onMounted } from 'vue';

import MonacoEditor from './MonacoEditor.vue';
import Tree from './Tree.vue';

const props = defineProps({
  fileList: {
    type: Array,
    default: [],
  },
});
onMounted(() => {});
</script>
