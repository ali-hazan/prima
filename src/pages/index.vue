<template>
  <div>
    <router-link class="btn btn-primary" to="/component">
      <Icon height="22" icon="ri:add-line" /> Component
    </router-link>
    <div v-if="selectedComponent" class="p-10 relative overflow-hidden h-[400px]">
      <component
        :is="selectedComponent.tag"
        ref="el"
        :style="style"
        style="position: absolute"
        :class="computedProperty"
      >
        {{ selectedComponent.label }}
      </component>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useComponentStore } from "../store/component";
import { ref } from "vue";
import { useDraggable } from "@vueuse/core";

const el = ref<HTMLElement | null>(null);

const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
});

const { selectedComponent ,computedProperty} = storeToRefs(useComponentStore());
</script>
