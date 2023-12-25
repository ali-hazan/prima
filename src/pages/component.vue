<template>
  <div class="bg-slate-200 p-2 h-screen">
    <router-link to="/" class="btn btn-primary">
      <Icon height="28" icon="ri:arrow-drop-left-line" /> Back
    </router-link>
    <h1 class="text-xl uppercase text-center font-bold mb-6">
      Select Component
    </h1>
    <div class="card shadow-md bg-white">
      <div class="card-body">
        <div v-for="item in componentsData">
          <button
            class="uppercase border border-secondary rounded-md h-36 w-52 font-bold text-lg hover:shadow-xl"
            @click="onComponentSelect(item)"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { useComponentStore } from "../store/component";
const { componentsData, onSelectComponent } = useComponentStore();
const router = useRouter();
const onComponentSelect = (item: any) => {
  onSelectComponent(item);
  router.push("/");
};
</script>
