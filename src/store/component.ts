import { defineStore, acceptHMRUpdate } from "pinia";
import { computed, ref } from "vue";
import { buttonProperties } from "../constants/component/button";

export const useComponentStore = defineStore("component-store", () => {
  const selectedComponent = ref();
  const selectedProperty = ref({});
  const componentsData = ref([
    {
      label: "Button",
      tag: "button",
      properties: buttonProperties,
    },
  ]);

  const onSelectComponent = (component: object) => {
    selectedComponent.value = component;
  };

  const onSelectedProperty = (key: string, value: string | null) => {
    selectedProperty.value[key] = value;
  };

  const computedProperty = computed(() => {
    return  Object.values(selectedProperty.value).filter(item=>item);
  });

  return {
    componentsData,
    selectedComponent,
    computedProperty,
    onSelectComponent,
    onSelectedProperty,
  };
});

