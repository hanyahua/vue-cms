import Vue from 'vue'
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css' 
Vue.component(Header.name, Header)
import app from './App.vue'
import '../src/lib/mui/css/mui.min.css'
import '../src/lib/mui/css/icon-extra.css'
var vm = new Vue({
    el: '#app',
    render: c => c(app)
})