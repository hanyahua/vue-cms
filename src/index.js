import Vue from 'vue'

import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css' 

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import router from './router.js'
import app from './App.vue'

Vue.component(Header.name, Header)

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router: router
})