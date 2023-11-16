<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution";

import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import JSONWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import CSSWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import HTMLWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import TSWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json')
      return new JSONWorker()

    if (label === 'css' || label === 'scss' || label === 'less')
      return new CSSWorker()

    if (label === 'html' || label === 'handlebars' || label === 'razor')
      return new HTMLWorker()

    if (label === 'typescript' || label === 'javascript')
      return new TSWorker()

    return new EditorWorker()
  },
}

const text=ref('')
let editorRef;
const editor = ref();
onMounted(() => {
  editorRef = monaco.editor.create(editor.value, {
    value: `import { serve } from "https://deno.land/std@0.177.1/http/server.ts"

serve(async () => {
  return new Response(
    \`"Hello from Edge Functions!"\`,
    { headers: { "Content-Type": "application/json" } },
  )
})`,
    language: "javascript",
    automaticLayout: true,
    suggest: {
      preview: true,
    },
    minimap: {
      enabled: false,
    },
    formatOnPaste: true,
    automaticLayout: true,
  });
});

onBeforeUnmount(() => {
  // editorRef.dispose();
});

// monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
//   noSemanticValidation: true,
//   noSyntaxValidation: false,
// });
// monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
//   target: monaco.languages.typescript.ScriptTarget.ES2016,
//   allowNonTsExtensions: true,
// });
</script>

<template>
  <div id="editor" ref="editor"></div>
</template>

<style scoped>
#editor {
  width: 100vw;
  height: 100vh;
}
</style>
