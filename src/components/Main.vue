<template>
  <n-layout has-sider class="h-screen">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="180"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <n-menu
        v-model:value="activeKey"
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
      />
    </n-layout-sider>
    <n-layout>
      <n-layout-content>
        <EditorPanel :fileList="fileList" />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup>
import { ref, h } from 'vue';

import EditorPanel from './EditorPanel.vue';
import { NIcon, NLayout, NLayoutSider, NLayoutContent } from 'naive-ui';

import { Folder, LogoJavascript, FileTrayFullSharp } from '@vicons/ionicons5';

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const activeKey = ref(null);
let collapsed = ref(true);

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

const menuOptions = [
  {
    label: '函数管理器',
    key: 'functions-manager',
    icon: renderIcon(FileTrayFullSharp),
  },
];
</script>

<style scoped></style>
