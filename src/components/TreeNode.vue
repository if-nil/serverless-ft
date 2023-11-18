<template>
  <div
    class="tree-node select-none"
    :class="inputValue.selected ? 'bg-[rgba(117,179,37,0.2)] text-[#fff]' : ''"
  >
    <div
      class="h-[20px] flex flex-row flex-nowrap items-center pl-0 flex-shrink-0 text-[12px] hover:bg-[rgba(255,255,255,0.05)]"
      @click="click"
      @contextmenu.prevent="onContextMenu"
    >
      <div
        class="w-[20px] h-[20px] flex items-center flex-shrink-0 justify-center"
        @click="iconClick"
      >
        <font-awesome-icon :icon="icon" />
      </div>
      {{ inputValue.title }}
    </div>
    <div v-show="showChild" class="pl-[12px]">
      <TreeNode
        v-for="(child, i) in inputValue.children"
        :openIcon="props.openIcon"
        :closeIcon="props.closeIcon"
        :leafIcon="props.leafIcon"
        :key="i"
        :folderCanbeSelected="props.folderCanbeSelected"
        :value="child"
        @nodeSelected="nodeSelected"
      ></TreeNode>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  value: {
    type: Object,
    default: {},
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

const icon = computed(() => {
  if (hasChildren.value === true) {
    return inputValue.value.opened ? props.openIcon : props.closeIcon;
  }
  return inputValue.value.icon !== undefined
    ? inputValue.value.icon
    : props.leafIcon;
});

const showChild = computed(() => inputValue?.value.opened);

const opened = ref(true);

const hasChildren = computed(() => inputValue.value.children?.length > 0);

const click = () => {
  opened.value = !opened.value;
  if ((hasChildren && props.folderCanbeSelected) || !hasChildren) {
    inputValue.value.selected = true;
    emit("nodeSelected", inputValue.value);
  } else {
    inputValue.value.opened = !inputValue.value.opened;
  }
};

const iconClick = (event) => {
  if (hasChildren && props.folderCanbeSelected) {
    event.stopPropagation();
    inputValue.value.opened = !inputValue.value.opened;
  }
};

const nodeSelected = (node) => {
  emit("nodeSelected", node);
};

const onContextMenu = (event) => {
  console.log(event);
};
</script>

<style scoped></style>
