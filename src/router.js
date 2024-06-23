import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage";

// import notfound from "@/views/404NotFound";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
            alias: '/',
            name: 'home'
        },
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

export default router;