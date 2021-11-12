import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AccueilTransporteur from "../views/transporteurs/AccueilTransporteur";
import InscriptionTransporteurs from "../views/transporteurs/InscriptionTransporteurs";
import ConnexionTransporteurs from "../views/transporteurs/ConnexionTransporteurs";
import DashboardTransporteurs from "../views/transporteurs/DashboardTransporteurs";
import AddSociete from "../views/transporteurs/AddSociete";
import AbonnementTransporteurs from "../views/transporteurs/AbonnementTransporteurs";
import Agences from "../views/transporteurs/Agences";
import Offres from "../views/transporteurs/Offres";
import Introduction from "../views/transporteurs/Introduction";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/transporteurs',
    name: 'AccueilTransporteur',
    component: AccueilTransporteur
  },
  {
    path: '/transporteurs/inscription',
    name: 'InscriptionTransporteurs',
    component: InscriptionTransporteurs
  },
  {
    path: '/transporteurs/connexion',
    name: 'ConnexionTransporteurs',
    component: ConnexionTransporteurs
  },
  {
    path: '/transporteurs/dashboard',
    name: 'DashboardTransporteurs',
    component: DashboardTransporteurs
  },
  {
    path: '/transporteurs/societe',
    name: 'AddSociete',
    component: AddSociete
  },
  {
    path: '/transporteurs/abonnement',
    name: 'AbonnementTransporteurs',
    component: AbonnementTransporteurs
  },
  {
    path: '/transporteurs/agences',
    name: 'Agences',
    component: Agences
  },
  {
    path: '/transporteurs/offres',
    name: 'Offres',
    component: Offres
  },
  {
    path: '/transporteurs/introduction',
    name: 'Introduction',
    component: Introduction
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
