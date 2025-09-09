import { createRouter, createWebHistory } from "vue-router";
import Menu from "@/components/contents/Menu.vue";
import List from "@/components/contents/List.vue";
import Exception from "@/components/exception/Exception.vue";
import InternalException from "@/components/exception/InternalException.vue";
import Board from "@/components/contents/Board.vue";

// Root Vue Router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 메뉴 컴포넌트 router
      path: "/",
      name: "메뉴",
      component: Menu,
    },
    {
      // 리스트 컴포넌트 router
      path: "/list",
      name: "리스트",
      component: List,
      props: true,
    },
    {
      path: "/list/board",
      name: "게시판",
      component: Board,
      props: true,
    },
    {
      // Exception router
      path: "/e",
      name: "Exception",
      component: Exception,
    },
    {
      path: "/e/in",
      name: "Internal",
      component: InternalException,
    },
  ],
});

export default router;
