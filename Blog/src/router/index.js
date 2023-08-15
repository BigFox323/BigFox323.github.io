import {
    createRouter,
    createWebHashHistory,
} from "vue-router";

import Home from "../pages/home.vue";

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/blog", component: () => import("../pages/blog.vue") },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;