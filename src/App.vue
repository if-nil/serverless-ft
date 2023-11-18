<script setup>
import { ref } from "vue";

import MonacoEditor from "./components/MonacoEditor.vue";
import TreeNode from "./components/TreeNode.vue";

const val = ref({
  title: "页面",
  selected: false,
  isFolder: true,
  children: [
    {
      title: "index.html",
      selected: false,
      opened: false,
      icon: "far fa-file-code",
    },
    {
      title: "product.html",
      selected: false,
      opened: false,
      icon: "far fa-file-code",
    },
  ],
  // input: (val) => {
  //   console.log("input", val);
  // },
  // nodeSelected: (val) => {
  //   console.log("nodeSelected", val);
  // },
});
</script>

<template>
  <!-- <MonacoEditor /> -->
  <div style="overflow: hidden">
    <div>
      <TreeNode :value="val" />
    </div>
  </div>
</template>
