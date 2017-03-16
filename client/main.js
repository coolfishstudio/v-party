import Vue from 'vue'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import store from './store'

/**
 * 主样式
 */
import './assets/css/app.css'

/**
 * 基础样式
 */
import './assets/css/basics/reset.css'
import './assets/css/basics/type.css'
import './assets/css/basics/layout.css'

/**
 * 引入mint-ui
 */
Vue.config.productionTip = false
Vue.use(MintUI)

/**
 * 引入vue-resource
 */
Vue.use(VueResource)
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
