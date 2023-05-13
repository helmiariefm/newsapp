import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex';
import * as newsModule from './store/news';
import App from './App.vue'
import router from './router'

import CKEditor from '@ckeditor/ckeditor5-vue';

const store = createStore({
    modules: {
        news: {
            namespaced: true, 
            ...newsModule,
        }      
    },
});

const app = createApp(App)

app.use(router)
app.use(CKEditor)
app.use(store);

app.mount('#app')