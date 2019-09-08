import Vue from 'vue'
// import * as VueGoogleMaps from 'vue2-google-maps'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB9WnvVn8B6d03-OTdM9l1yyoXVE9Ikqbs',
    libraries: 'places',
  },
})