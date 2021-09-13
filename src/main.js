import { createApp } from 'vue'
//Importando as rotas de navegação
import {createRouter, createWebHistory} from "vue-router" 
import App from './App.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [

    ]
})
const app = createApp(App);
app.use(router);
app.mount('#app');
