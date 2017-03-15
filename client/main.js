import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'


Vue.config.productionTip = false
Vue.use(MintUI)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
