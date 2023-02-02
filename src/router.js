import { createWebHistory, createRouter } from 'vue-router'
import PersonalArea from "@/components/PersonalArea"

const routes = [
    { path: '/', component: PersonalArea },
]
const router = createRouter({
    history: createWebHistory(),
    base: process.env.VUE_APP_URL,
    routes,
})

export default router
