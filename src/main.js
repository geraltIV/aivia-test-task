import App from "./App.vue";
import { createApp } from "vue";
import { registerPlugins } from "@/plugins";
import { store } from "@/store";
import Loader from "@/components/Loader.vue";

const app = createApp(App);

app.component("loader", Loader);

registerPlugins(app);

app.use(store).mount("#app");
