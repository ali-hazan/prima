<template>
  <div class="card bg-base-100 shadow-md h-full">
    <div class="card-body">
      <h2 class="text-2xl font-medium mb-4 capitalize">Component config</h2>
      <form>
        <div v-for="property in selectedComponent?.properties" class="mb-6">
          <h3 class="text-lg font-medium mb-4">
            {{ property.label }}
          </h3>
          <div class="flex items-center flex-wrap gap-x-8 gap-y-4">
            <label
              v-for="item in property.class"
              class="grid grid-cols-5 cursor-pointer"
            >
              <span class="label-text col-span-4 uppercase">{{
                item.label
              }}</span>
              <input
                @change="onPropertyChange(property.value, item.value)"
                type="radio"
                :name="property.value"
                :value="item.value"
                class="radio"
              />
            </label>
            <label
              v-if="property.class"
              class="grid grid-cols-5 cursor-pointer"
            >
              <span class="label-text col-span-4 uppercase">Remove</span>
              <input
                @change="onPropertyChange(property.value, null)"
                type="radio"
                :name="property.value"
                :value="null"
                class="radio"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useComponentStore } from "../../store/component";
import { storeToRefs } from "pinia";

const { selectedComponent } = storeToRefs(useComponentStore());
const { onSelectedProperty } = useComponentStore();

const onPropertyChange = (property: string, value: string | null) => {
  onSelectedProperty(property, value);
};
</script>
