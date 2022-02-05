<script setup lang="ts">
import { PropType } from '@vue/runtime-core';

defineProps({
  color: {
    type: String as PropType<'red' | 'orange' | 'green'>,
    required: true,
  },
});
</script>

<template>
  <button
    type="button"
    :class="['btn-action h-4 w-4 shadow shadow-slate-800 leading-none', color]"
  >
    <span class="material-icons text-xs text-slate-800 text-center">
      <slot></slot>
    </span>
  </button>
</template>

<style lang="scss" scoped>
.orange {
  @apply bg-orange-600;
  @apply hover:bg-orange-500;
}

.red {
  @apply bg-red-600;
  @apply hover:bg-red-500;
}

.green {
  @apply bg-green-600;
  @apply hover:bg-green-500;
}
</style>
