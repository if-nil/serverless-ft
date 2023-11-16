import { ref } from 'vue';

import { defineStore } from 'pinia';

export const useCodeLayoutStore = defineStore('code_layout', {
  // 先定义一个最基本的 message 数据
  state: () => {
    const layout = ref(0);
    function change() {
      layout.value = layout.value === 0 ? 1 : 0;
    }
    return {
      layout,
      change,
    };
  },
});
