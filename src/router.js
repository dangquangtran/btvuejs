import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./pages/HomePage";
import AddProject from "./pages/AddProject";
import EditProject from "./pages/EditProject";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/add",
    component: AddProject,
  },
  {
    path: "/projects/:id",
    component: EditProject,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
