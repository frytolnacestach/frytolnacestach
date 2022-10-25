import { createApp } from 'vue'
import meta from 'vue-meta'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')
    .use(meta, {
        keyName: 'metaInfo',
        attribute: 'data-vue-meta',
        ssrAttribute: 'data-vue-meta-server-rendered',
        tagIDKeyName: 'vmid',
        refreshOnceOnNavigation: true
    })
