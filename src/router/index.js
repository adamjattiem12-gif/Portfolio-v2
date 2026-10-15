import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    // Keep existing URLs useful while presenting every section on one page.
    ...['skills', 'projects', 'about', 'contact', 'education'].map((section) => ({
      path: `/${section}`,
      redirect: { path: '/', hash: `#${section === 'education' ? 'certifications' : section}` },
    })),
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  },
})

export default router
