import header from "../components/header";
import about from "./about";
import contact from "./contact";
import footer from "./footer";
import project from "./project";
import skills from "./skills";

const home = () => {
  return `
  ${header()}
  <section class="bgimage" id="home">
  <div class="container-fluid">
      <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
          <h2 class="hero_title">Hi, it's me Dang Thanh</h2>
          <p class="hero_desc">I'm a website developer</p>
      </div>
      </div>
  </div>
</section>
  ${about()}
  ${skills()}
  ${project()}
  ${contact()}
  ${footer()}
  `
}

export default home;