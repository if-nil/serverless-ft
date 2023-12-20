<template>
  <n-tree
    block-line
    expand-on-click
    :data="props.fileList"
    :node-props="nodeProps"
    :on-update:expanded-keys="updatePrefixWithExpaned"
  />
</template>
<script setup>
import { h } from 'vue';

import { NIcon, NTree } from 'naive-ui';

import { Folder, FolderOpenOutline } from '@vicons/ionicons5';

const props = defineProps({
  fileList: {
    type: Array,
    default: [],
  },
});

const nodeProps = ({ option }) => {
  return {
    onClick() {
      if (!option.children && !option.disabled) {
        console.info('[Click] ' + option.label);
      }
    },
  };
};
const updatePrefixWithExpaned = (_keys, _option, meta) => {
  if (!meta.node) return;
  switch (meta.action) {
    case 'expand':
      meta.node.prefix = () =>
        h(NIcon, null, {
          default: () => h(FolderOpenOutline),
        });
      break;
    case 'collapse':
      meta.node.prefix = () =>
        h(NIcon, null, {
          default: () => h(Folder),
        });
      break;
  }
};
</script>
