import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/Blog", name: "Blog", component: () => import("../pages/Blog.vue") },
    { path: "/Blog-post/:filename", component: () => import("../pages/Blog-post.vue") },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
