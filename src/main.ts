import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .mount("#app")
  .$nextTick(() => {
    // Remove Preload scripts loading
    postMessage({ payload: "removeLoading" }, "*");

    // Use contextBridge
    window.ipcRenderer.on("main-process-message", (_event, message) => {
      console.log(message);
    });
  });
