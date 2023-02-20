
import "bootstrap/dist/css/bootstrap.min.css";
import { router, render } from "./lib";
import home from "./page/home";
import notFound from "./page/notFound";
import projectDetail from "./page/projectDetail";
import projectAdd from "./page/admin/projectAdd";
import projectAdmin from "./page/admin/projectAdmin";
import projectEdit from "./page/admin/projectEdit";

const app = document.querySelector("#app");
router.on("/admin/projectAdmin/add", () => render(projectAdd, app))
router.on("/admin/projectAdmin", () => render(projectAdmin, app))
router.on("/admin/projectAdmin/:id/edit", ({ data }) => render(() => projectEdit(data), app))
router.on("/project/:id", ({ data }) => render(() => projectDetail(data), app))
router.on("/", () => render(home, app))
router.notFound(() => render(notFound, app))
router.resolve();
















