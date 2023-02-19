import nav from "./nav";

const header = () => {
  return`
  <nav class="navbar navbar-expand-lg fixed-top navbarScroll">
  <div class="container">
      <a class="navbar-brand" href="#">Đ.T</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
              <li class="nav-item active">
                  <a class="nav-link" href="">${nav()}</a>
              </li>
          </ul>
          
      </div>
  </div>
</nav>
  `
}

export default header;