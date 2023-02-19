
const app =document.querySelector("#app");
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.css";
import {router,render} from "./lib";
import about from "./page/about";
import contact from "./page/contact";
import footer from "./page/footer";
import home from "./page/home";
import notFound from "./page/notFound";
import project from "./page/project";
import projectDetail from "./page/projectDetail";
import skills from "./page/skills";

router.on("/admin/projectAdmin", () => render(projectAdmin, app))
router.on("/admin/projectAdmin/add", () => render(projectAdd, app))
router.on("/admin/projectAdmin/:id/edit", ({ data }) => render(() => projectEdit(data), app))
router.on("/project/:id", ({ data }) => render(() => projectDetail(data), app))
router.on("/", () => render(home, app))
router.notFound(()=>render(notFound,app))
router.resolve();
















