<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue';
import VHeader from '@/components/VHeader';
import VWindow, { Window } from '@/components/VWindow';

const windows = ref<Window[]>([
  {
    title: 'test',
  },
]);

const onAddWindow = () => {
  console.log('hello');
  windows.value.push({ title: 'ok' });
};

const onDelete = (i: number) => {
  windows.value.splice(i, 1);
};
</script>

<template>
  <div class="min-h-screen bg-slate-100">
    <v-header> </v-header>
    <button type="button" @click="onAddWindow">add a window</button>
    <v-window
      @delete="onDelete(index)"
      v-for="(window, index) in windows"
      :key="`window-${index}`"
      :id="`window-${index}`"
      :title="window.title"
    ></v-window>
  </div>
</template>
