import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import 'element-plus/dist/index.css';
import 'reset-css';
import VueLazyload from 'vue-lazyload';
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App).use(router).use(ElementPlus).use(pinia).use(VueLazyload).mount('#app');
