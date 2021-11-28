import { createApp } from 'vue'
import { createStore } from 'vuex';
import App from './App.vue'
import router from '@/router';
import appStore from '@/store/appStore';
import VCalendar from 'v-calendar';

const store = createStore(appStore);

createApp(App)
  .use(store)
  .use(router)
  .use(VCalendar, {
    datePickerUpdateOnInput: true,
    datePickerShowDayPopover: false,
    popoverDirection: 'top',
    popoverVisibility: 'hidden'
  })
  .mount('#app')