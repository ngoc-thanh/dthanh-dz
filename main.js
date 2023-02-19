
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

const app =document.querySelector("#app");

router.on("/admin/projectAdmin", () => render(projectAdmin, app))
router.on("/admin/projectAdmin/add", () => render(projectAdd, app))
router.on("/admin/projectAdmin/edit", () => render( projectEdit), app)
router.on("/", () => render(home, app))
router.on("/project", () => render(project, app))
router.on("/about", () => render(about, app))
router.on("/contact", () => render(contact, app))
router.on("/footer", () => render(footer, app))
router.on("/skills", () => render(skills, app))
router.on("/project",()=>render(project,app))
router.notFound(()=>render(notFound,app))
router.resolve();