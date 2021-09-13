import { createApp } from 'vue'
//Importando as rotas de navegação
import {createRouter, createWebHistory} from "vue-router" 
import App from './App.vue'

//importando as páginas
import PageA from "./components/PageA.vue"
import PageB from "./components/PageB.vue"
import PageC from "./components/PageC.vue"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/pageA", component: PageA},
        {path: "/pageB", component: PageB},
        {path: "/pageC", component: PageC},
    ]
})
const app = createApp(App);
app.use(router);
app.mount('#app');
