<script setup lang="ts">
import { useCounterStore } from "../store/counter";
import { storeToRefs } from "pinia";
const { increment } = useCounterStore();
const { doubleCount } = storeToRefs(useCounterStore());
</script>

<template>
  <div>
    <router-link class="btn btn-primary" to="/component">
      <Icon height="22" icon="ri:add-line" /> Component
    </router-link>
  </div>
</template>
