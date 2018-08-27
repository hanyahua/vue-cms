import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from './components/HomeContainer.vue'
import MemberContainer from './components/MemberContainer.vue'
import ShopcarContainer from './components/ShopcarContainer.vue'
import SearchContainer from './components/SearchContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeContainer
      }, {
        path: '/member',
        name: 'member',
        component: MemberContainer
      }, {
        path: '/shopcar',
        name: 'shopcar',
        component: ShopcarContainer
      }, {
        path: '/search',
        name: 'search',
        component: SearchContainer
      }
  ],
  linkActiveClass: 'mui-active'
})