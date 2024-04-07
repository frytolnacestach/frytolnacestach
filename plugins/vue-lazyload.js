import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://image.frytolnacestach.cz/storage/_default/no-image.webp',
  attempt: 1,
  loadingClass: 'lazyloading',
  loadedClass: 'lazyloaded'
})

