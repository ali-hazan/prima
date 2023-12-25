import { createApp } from "vue";
import "./assets/styles/global.scss";
import App from "./App.vue";
import router from "./routes";
import { createPinia } from "pinia";
import { Icon } from "@iconify/vue";

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .component("Icon", Icon)
  .mount("#app")
  .$nextTick(() => {
    // Remove Preload scripts loading
    postMessage({ payload: "removeLoading" }, "*");

    // Use contextBridge
    window.ipcRenderer.on("main-process-message", (_event, message) => {
      console.log(message);
    });
  });
