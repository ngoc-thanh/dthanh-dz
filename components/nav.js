import { menus } from "../data";
const nav = () => {

    return `
    <nav class="navbar navbar-expand-lg fixed-top navbarScroll">
    <div class="container">
        <a class="navbar-brand" href="#home">Đ.T</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">${menus.map((menu) =>
        `<li class="nav-item active">
                    <a class="nav-link" href="${menu.path}">${menu.name}</a>
                </li>`).join("")}
            </ul>
        </div>
    </div>
</nav>
    `
}

export default nav;
