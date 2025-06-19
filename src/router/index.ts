import { createRouter, createWebHistory } from "vue-router";
import Menu from "../components/contents/Menu.vue";
import List from "../components/contents/List.vue";

// Root Vue Router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 메뉴 컴포넌트 router
      path: "/",
      name: "Menu",
      component: Menu,
    },
    {
      // 리스트 컴포넌트 router
      path: "/list",
      name: "List",
      component: List,
      props: true,
    },
  ],
});

export default router;
