import { createRouter, createWebHistory } from 'vue-router'
import HomeV from "../components/HomeV.vue"
import Hebergements from "../components/Hebergements.vue"
import Services from "../components/Services.vue"
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
      path: '/hebergements',
      name: 'hebergements',
      component: Hebergements,
    },
            {
      path: '/services',
      name: 'services',
      component: Services,
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