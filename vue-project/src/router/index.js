import { createRouter, createWebHistory } from 'vue-router'
import HomeV from "../components/HomeV.vue"
import ThePalace from "../components/ThePalace.vue"
import VillaBonsai from "../components/VillaBonsai.vue"
import Contact from "../components/Contact.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeV,
    },
        {
      path: '/the-palace',
      name: 'thepalace',
      component: ThePalace,
    },
            {
      path: '/villa-bonsai',
      name: 'villabonsai',
      component: VillaBonsai,
    },
              {
      path: '/contact',
      name: 'contact',
      component:Contact,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
})

export default router