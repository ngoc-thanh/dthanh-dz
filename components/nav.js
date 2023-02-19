import { menus } from "../data";
const nav = () => {

    return `
    <nav class="col-lg-9">
    <ul class="header_nav-content mb0">
    ${menus.map((menu) => `<li class="header_nav-content-e"><a href="${menu.path}">${menu.name}</a></li>`).join(" ")}
    </ul>
    </nav>
    `
}

export default nav;
