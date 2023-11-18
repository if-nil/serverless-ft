<script setup>
import { ref } from "vue";

import MonacoEditor from "./components/MonacoEditor.vue";
import NodeTree from "./components/NodeTree.vue";
import Panel from "./components/Panel.vue";

const fileList = ref([
  {
    title: "页面",
    selected: false,
    isFolder: true,
    children: [
      {
        title: "index.html",
        selected: false,
        opened: false,
        icon: "fas fa-file-code",
      },
      {
        title: "product.html",
        selected: false,
        opened: false,
        icon: "fas fa-file-code",
      },
    ],
  },
  {
    title: "页面2",
    selected: false,
    isFolder: true,
    children: [
      {
        title: "index.html",
        selected: false,
        opened: false,
        icon: "fas fa-file-code",
      },
      {
        title: "product.html",
        selected: false,
        opened: false,
        icon: "fas fa-file-code",
      },
    ],
  },
]);
</script>

<template>
  <!-- <MonacoEditor /> -->
  <div style="overflow: hidden">
    <div>
      <Panel :fileList="fileList" />
    </div>
  </div>
</template>
