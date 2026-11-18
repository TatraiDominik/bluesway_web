import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/Landing.vue'
import AboutUs from '@/views/AboutUs.vue'
import Archive from '@/views/Archive.vue'
import Concerts from '@/views/Concerts.vue'
import Contacts from '@/views/Contacts.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Kezdőlap',
      component: Landing,
    },
    {
      path: '/rolunk',
      name: 'Rólunk',
      component: AboutUs,
    },
    {
      path: '/archivum',
      name: 'Archívum',
      component: Archive,
    },
    {
      path: '/koncertek',
      name: 'Koncertek',
      component: Concerts,
    },
    {
      path: '/kapcsolatok',
      name: 'Kapcslatok',
      component: Contacts,
    },
  ],
})

export default router
