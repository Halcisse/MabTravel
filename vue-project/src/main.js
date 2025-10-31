
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
/* add fontawesome core */

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router)
// app.use(VueRecaptcha, {
//     siteKey: 6LfWt1grAAAAAKGPeKEvtCM58F5j2VKsU8WAeqOF,
// loaderOptions : {
//     autoHideBadge :true
// }
// })
app.mount('#app')
