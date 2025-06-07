
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'


const app = createApp(App)

app.use(router)
// app.use(VueRecaptcha, {
//     siteKey: 6LfWt1grAAAAAKGPeKEvtCM58F5j2VKsU8WAeqOF,
// loaderOptions : {
//     autoHideBadge :true
// }
// })
app.mount('#app')
