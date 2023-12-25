<script setup lang="ts">
import { useCounterStore } from "../store/counter";
import { storeToRefs } from "pinia";
const { increment } = useCounterStore();
const { doubleCount } = storeToRefs(useCounterStore());
</script>

<template>
  <h1>About page</h1>
  <router-link :to="{ name: 'HOME' }"> Home </router-link>
  <router-link :to="{ name: 'ABOUT' }"> About </router-link>

  <div class="card">
    <button type="button" @click="increment">count is {{ doubleCount }}</button>
  </div>
</template>
