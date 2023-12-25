<template>
  <main class="grid grid-cols-12 p-2 gap-4 h-screen bg-slate-200">
    <div class="col-span-8">
      <router-view></router-view>
    </div>
    <div class="col-span-4">
      <EditorComponent />
    </div>
  </main>
</template>

<script lang="ts" setup>
import EditorComponent from "../components/Editor/Component.vue";
</script>
