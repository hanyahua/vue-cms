import Vue from 'vue'
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css' 
Vue.component(Header.name, Header)
import app from './App.vue'
import '../src/lib/mui-master/dist/css/mui.min.css'
var vm = new Vue({
    el: '#app',
    render: c => c(app)
})