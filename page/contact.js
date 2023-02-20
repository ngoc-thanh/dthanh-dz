
const contact = () => {
  return `
  <section id="contact">
  <div class="container mt-3 contactContent">
      <h1 class="text-center">Contact Me</h1>

      <div class="row mt-4">
          <div class="col-lg-6">
              
              <div style="max-width:100%;overflow:hidden;color:red;width:500px;height:500px;">
                  <div id="embedmap-canvas" style="height:100%; width:100%;max-width:100%;">
                      <iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7446.976597001274!2d105.73522477453038!3d21.053150943940476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454f9de2328cf%3A0xc5685fbea9808d8e!2zTmd1ecOqbiBYw6EsIE1pbmggS2hhaSwgVOG7qyBMacOqbSwgSGFub2ksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1676736477539!5m2!1sen!2s">
                      </iframe>
                  </div>
                  <a class="googlemaps-html" href="https://goo.gl/maps/PTwFTNvMsshWf7Ns6" id="get-data-forembedmap">https://goo.gl/maps/PTwFTNvMsshWf7Ns6</a>
                  <style>#embedmap-canvas img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}
                  </style>
              </div>
          </div>

          <div class="col-lg-6">
              
              <form>
                  <input type="text" class="form-control form-control-lg" placeholder="Name">
                  <input type="email" class="form-control mt-3" placeholder="Email">
                  <input type="text" class="form-control mt-3" placeholder="Subject">
                  <div class="mb-3 mt-3">
                      <textarea class="form-control" rows="5" id="comment" name="text" placeholder="Project Details"></textarea>
                  </div>
              </form>
              <button type="button" class="btn btn-success mt-3 style="color:red">Contact Me</button>
              
          </div>

      </div>
  </div>
</section>
  `
}
export default contact;