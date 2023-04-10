import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/error.png',
  loading: '/loading.gif',
  attempt: 1
})

Vue.directive('lazy', {
  inserted: function (el) {
    el.addEventListener('load', function () {
      el.classList.add('loaded')
    })
  }
})
