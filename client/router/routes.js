/**
 * 路由管理
 */
import { Home, About } from '../pages'

const routes = [
    { path: '/index', component: Home },
    { path: '/about', component: About },
    { path: '*', redirect: 'index' },
]

export default routes
