import { createApp } from 'vue'
import { createStore } from 'vuex';
import App from './App.vue'
import router from '@/router';
import appStore from '@/store/appStore';

const store = createStore(appStore);

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')