import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://placehold.it/300x300?text=Image+not+found',
  loading: 'https://placehold.it/300x300?text=Loading...',
  attempt: 1,
  lazyComponent: true
})