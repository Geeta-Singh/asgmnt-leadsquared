import Vue from 'vue'
import App from './App.vue'
import './scss/app.scss';
import router from './router'
import {  IconsPlugin,CardPlugin ,DropdownPlugin,NavPlugin,NavbarPlugin,AvatarPlugin ,ButtonPlugin} from 'bootstrap-vue'
// import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(DropdownPlugin)

Vue.use(IconsPlugin)
Vue.use(AvatarPlugin)
Vue.use(ButtonPlugin)
import { BNav } from 'bootstrap-vue'
Vue.component('b-nav', BNav)
Vue.use(NavPlugin)
Vue.use(NavbarPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
