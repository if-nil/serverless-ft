<script setup>
import { ref, h } from 'vue';

import EditorPanel from './components/EditorPanel.vue';
import { NIcon } from 'naive-ui';

import { Folder, LogoJavascript } from '@vicons/ionicons5';

const fileList = ref([
  {
    key: '页面',
    label: '页面',
    prefix: () =>
      h(NIcon, null, {
        default: () => h(Folder),
      }),
    children: [
      {
        key: 'index.html',
        label: 'index.html',
        prefix: () =>
          h(NIcon, null, {
            default: () => h(LogoJavascript),
          }),
      },
      {
        key: 'product.html',
        label: 'product.html',
        prefix: () =>
          h(NIcon, null, {
            default: () => h(LogoJavascript),
          }),
      },
    ],
  },
  {
    key: '页面2',
    label: '页面2',
    prefix: () =>
      h(NIcon, null, {
        default: () => h(Folder),
      }),
    children: [
      {
        key: 'index.html',
        label: 'index.html',
        prefix: () =>
          h(NIcon, null, {
            default: () => h(LogoJavascript),
          }),
      },
    ],
  },
]);
</script>

<template>
  <div style="overflow: hidden" class="h-screen">
    <div>
      <!-- <EditorPanel :fileList="fileList" /> -->
      <Main></Main>
    </div>
  </div>
</template>
