import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import InicioPage from '../views/InicioPage.vue'
import NoticiasPPage from '../views/NoticiasP.vue'
import NoticiasDPage from '../views/NoticiasD.vue'
import NoticiasCPage from '../views/NoticiasC.vue'
import NoticiasPoPage from '../views/NoticiasPo.vue'
import NoticiasCiPage from '../views/NoticiasCi.vue'
import NoticiasEPage from '../views/NoticiasE.vue'
import ContactPage from '../views/ContactPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },

  {
    path: '/home',
    name: 'Home', 
    component: HomePage
  },


  {
    path: '/inicio',
    name: 'Inicio',
    component: InicioPage
  },

  {
    path: '/noticiaspoliciales',
    name: 'NoticiasP',
    component: NoticiasPPage
  },

  {
    path: '/noticiasdeportivas',
    name: 'NoticiasD',
    component: NoticiasDPage
  },
  {
    path: '/noticiasculturales',
    name: 'NoticiasC',
    component: NoticiasCPage
  },
  {
    path: '/noticiaspoliticas',
    name: 'NoticiasPo',
    component: NoticiasPoPage
  },
  {
    path: '/noticiascientificas',
    name: 'NoticiasCi',
    component: NoticiasCiPage
  },
  {
    path: '/noticiasextranjeras',
    name: 'NoticiasE',
    component: NoticiasEPage
  },

  {
    path: '/contacto',
    name: 'ContactPage',
    component: ContactPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
