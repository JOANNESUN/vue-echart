import Vue from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import MultiSelect from 'primevue/multiselect';

// import 'primevue/resources/themes/saga-blue/theme.css'       
// import 'primevue/resources/primevue.min.css'              
// import 'primeicons/primeicons.css'                   


const app = createApp(App);

app.use(PrimeVue);
app.component('MultiSelect', MultiSelect)
app.mount('#app');

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
