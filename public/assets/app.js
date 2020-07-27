import Vue from 'vue'
import vuetify from './vuetify'
import router from "./router/index";// path to vuetify export

window.axios = require('axios')

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

const app = new Vue({
  vuetify,
  router,
  el: '#app',
})