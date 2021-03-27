import { createApp, h } from "vue";
import App from "./App.vue";
import "./index.css";
import EditTodo from "./components/todos/EditTodo.vue";
import Todos from "./components/todos/Todos.vue";
import Dashboard from "./components/Dashboard.vue";
import { createRouter, createWebHashHistory } from "vue-router";

// 实例创建方式
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "dashboard", component: Dashboard },
    { path: "/todos", name: "todos", component: Todos },
  ],
});

// 特性：动态路由的增加
router.addRoute({
  path: "/about",
  name: "about",
  component: () => import("./components/About.vue"),
});
// 添加子路由
router.addRoute("about", {
  path: "/about/info",
  name: "info",
  component: {
    render() {
      return h("div", "info page");
    },
  },
});

createApp(App).use(router).component("EditTodo", EditTodo).mount("#app");
