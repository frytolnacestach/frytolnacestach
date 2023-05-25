import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCSMOk3Z5URS7Mbb_T0RswNvemjUB3gPgg",
    //key: process.env.GOOGLE_MAPS_API_KEY,
    libraries: 'places',
    region: 'CZ',
    language: 'cs'
  }
})