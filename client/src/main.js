import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';
import VCalendar from 'v-calendar';

createApp(App)
  .use(router)
  .use(VCalendar, {
    datePickerUpdateOnInput: true,
    datePickerShowDayPopover: false,
    popoverDirection: 'top',
    popoverVisibility: 'hidden'
  })
  .mount('#app')