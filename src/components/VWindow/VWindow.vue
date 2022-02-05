<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { drag } from '../../utils/drag';
import VActionButton from './VActionButton';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  scalable: {
    type: Boolean,
    default: true,
  },
  minimizable: {
    type: Boolean,
    default: true,
  },
});

const scale = ref(false);
const minimize = ref(false);

onMounted(() => {
  const windowEl = document.getElementById(props.id);
  if (windowEl) {
    drag(windowEl);
  }
});

const onExpand = () => {
  scale.value = !scale.value;
};

const onMinimize = () => {
  minimize.value = !minimize.value;
};

defineEmits(['minimize', 'delete']);
</script>

<template>
  <div
    :id="id"
    :class="[
      'absolute rounded bg-white drop-shadow-md overflow-hidden flex flex-col',
      { scalable, scale, ['minimize-window']: minimize },
    ]"
  >
    <header
      class="h-10 bg-slate-900 flex justify-between items-center px-4 space-x-4 cursor-move"
    >
      <span class="text-slate-200">{{ title }}</span>
      <div class="space-x-2">
        <v-action-button
          v-if="props.minimizable"
          color="green"
          @click="onMinimize"
          >remove</v-action-button
        >
        <v-action-button v-if="props.scalable" color="orange" @click="onExpand"
          >settings_overscan</v-action-button
        >
        <v-action-button color="red" @click="$emit('delete')"
          >clear</v-action-button
        >
      </div>
    </header>
    <div
      :class="[
        'p-4 bg-slate-800 text-slate-200 flex-grow',
        { minimizable, minimize },
      ]"
    >
      my window
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-action {
  border-radius: 50%;
}

.scalable {
  transition: min-height, min-width 0.15s ease-out;
}

.scale {
  min-height: 100vh;
  min-width: 100vw;
  top: 0 !important;
  left: 0 !important;
  transition: min-height, min-width 0.5s ease-in;
}

.minimizable {
  transition: max-height 0.15s ease-out;
}

.minimize {
  padding: 0;
  max-height: 0;
  transition: max-height 0.5s ease-in;
  overflow: hidden;
}

.minimize-window {
  height: initial !important;
}
</style>
