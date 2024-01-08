<template>
  <n-layout>
    <n-layout-header bordered>
      <n-menu
        v-model:value="activeKey"
        mode="horizontal"
        :options="headerMenuOptions"
        responsive
      />
    </n-layout-header>
    <n-layout has-sider>
      <!-- 侧边栏 -->
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
          :options="siderMenuOptions"
        />
      </n-layout-sider>

      <!-- 多功能框以及代码编辑器 -->
      <n-layout-content>
        <n-split
          direction="horizontal"
          class="h-screen"
          :default-size="0.4"
          :max="1"
          :min="0"
        >
          <template #1> <Tree :fileList="fileList" /> </template>
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
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped></style>
<script setup>
import { ref, h } from 'vue';

import Tree from './Tree.vue';
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
        key: '页面/index.html',
        label: 'index.html',
        prefix: () =>
          h(NIcon, null, {
            default: () => h(LogoJavascript),
          }),
      },
      {
        key: '页面/product.html',
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
        key: '页面2/index.html',
        label: 'index.html',
        prefix: () =>
          h(NIcon, null, {
            default: () => h(LogoJavascript),
          }),
      },
    ],
  },
]);

const siderMenuOptions = [
  {
    label: '函数管理器',
    key: 'functions-manager',
    icon: renderIcon(FileTrayFullSharp),
  },
];

const headerMenuOptions = [
  {
    label: '工作台',
    key: 'console',
  },
];
onMounted(() => {});
</script>
