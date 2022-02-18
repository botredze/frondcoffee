import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Main from "@/components/Main";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },

        {
            path: '/main',
            component: Main
        }

    ]
})

export default router
