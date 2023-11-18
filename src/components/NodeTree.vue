<template>
  <div class="flex-[1] w-full overflow-auto h-full flex [flex-flow:column]">
    <TreeNode
      v-for="(node, i) in inputValue"
      :key="i"
      :value="inputValue[i]"
      :openIcon="openIcon"
      :closeIcon="closeIcon"
      :leafIcon="leafIcon"
      :folderCanbeSelected="folderCanbeSelected"
      @nodeSelected="nodeSelected"
    ></TreeNode>
  </div>
</template>

<script setup>
import { computed } from "vue";

import TreeNode from "./TreeNode.vue";

const props = defineProps({
  value: {
    type: Array,
    default: [],
  },
  openIcon: {
    type: String,
    default: "fas fa-folder-open",
  },
  closeIcon: {
    type: String,
    default: "fas fa-folder",
  },
  leafIcon: {
    type: String,
    default: "fas fa-file",
  },
  folderCanbeSelected: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["input", "nodeSelected"]);
const inputValue = computed({
  get: () => props.value,
  set: (val) => emit("input", val),
});

const nodeSelected = (selectedNode) => {
  inputValue.value.forEach((child) => {
    resetSelected(selectedNode, child);
  });
  emit("nodeSelected", selectedNode);
};
const resetSelected = (selectedNode, node) => {
  node.selected = node === selectedNode;
  if (node.children) {
    node.children.forEach((child) => {
      resetSelected(selectedNode, child);
    });
  }
};
</script>

<style></style>
