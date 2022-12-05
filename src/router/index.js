import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Dashboard
    },
    {
        path: '/add/payment/:category?',
        name: 'form',
        component: () => import('../components/popup.vue'),
    },
    {
        path: "/:mode/payment/:category?",
        name: "form",
        component: () => import("../components/popup.vue"),
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router