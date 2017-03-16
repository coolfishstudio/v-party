import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'

Vue.use(Router)
/**
 * 路由入口
 */
export default new Router({
    mode: 'hash',
    routes
})
