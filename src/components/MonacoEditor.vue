<template>
  <div id="editor" ref="editor" class="w-full h-full"></div>
</template>
<style scoped></style>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

import * as monaco from 'monaco-editor';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import TSWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

import { useResizeObserver } from '@vueuse/core';

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'typescript' || label === 'javascript') return new TSWorker();
    return new EditorWorker();
  },
};

const editor = ref();
let editorRef = ref();
onMounted(() => {
  editorRef = monaco.editor.create(editor.value, {
    value: `import { serve } from "https://deno.land/std@0.177.1/http/server.ts"

serve(async () => {
  return new Response(
    \`"Hello from Edge Functions!"\`,
    { headers: { "Content-Type": "application/json" } },
  )
})`,
    language: 'javascript',
    suggest: {
      preview: true,
    },
    minimap: {
      enabled: false,
    },
    automaticLayout: false,
  });
});
const editorObserver = useResizeObserver(editor, () => {
  editorRef?.layout();
});
onBeforeUnmount(() => {
  editorRef?.dispose();
  editorObserver?.stop();
});
</script>
