var homeContent = `<h1>Home</h1>
<div class="images">
<img src="images/canada-tour-01.jpg" alt="" />
<img src="images/canada-tour-02.jpg" alt="" />
<img src="images/canada-tour-03.jpg" alt="" />
</div>
<h1>Welcome to Travel-Spot</h1>

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio
  eaque id voluptatum iste officia esse beatae corrupti facere dicta sequi
  a quas facilis eos, soluta, maxime voluptate cum nesciunt?
</p>
<p>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quasi
  vel eius nostrum placeat deleniti, mollitia voluptate nesciunt,
  molestias unde aut deserunt omnis corrupti dolor quibusdam libero,
  laboriosam sequi pariatur?
</p>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ut
  eveniet, porro at neque nesciunt ipsam quibusdam natus consequuntur
  obcaecati laboriosam, nemo consectetur tenetur pariatur perferendis
  debitis quasi dolor possimus.
</p>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
  nesciunt magni, libero facere totam architecto ipsa cupiditate facilis
  soluta maxime suscipit quia reiciendis, ullam impedit eaque et voluptas.
  Optio, delectus.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem sunt
  enim ea, minima pariatur labore ipsa esse perspiciatis dignissimos
  necessitatibus voluptatem ut sit molestiae consequatur, doloribus non
  quod? Atque, sit.
</p>
<footer>
  <span> travel-Spot </span>
  <img src="images/socials.png" alt="" />
</footer>`;
var aboutContent = `<div class="about"><h1>About</h1>
<div class="images">
<img src="images/about-client-01.jpg" alt="" />
<img src="images/about-client-02.jpg" alt="" />
</div>
<div class="text">
  <div class="left">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio eaque
      id voluptatum iste officia esse beatae corrupti facere dicta sequi a quas
      facilis eos, soluta, maxime voluptate cum nesciunt?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quasi vel
      eius nostrum placeat deleniti, mollitia voluptate nesciunt, molestias unde
      aut deserunt omnis corrupti dolor quibusdam libero, laboriosam sequi
      pariatur?
    </p>
  </div>
  <div class="right">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio eaque
      id voluptatum iste officia esse beatae corrupti facere dicta sequi a quas
      facilis eos, soluta, maxime voluptate cum nesciunt?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quasi vel
      eius nostrum placeat deleniti, mollitia voluptate nesciunt, molestias unde
      aut deserunt omnis corrupti dolor quibusdam libero, laboriosam sequi
      pariatur?
    </p>
  </div>
</div>
<footer>
  <span> travel-Spot </span>
  <img src="images/socials.png" alt="" />
</footer>
</div>`;
var productsContent = `<div class="products">
<h1>Products</h1>
<div class="images">
<img src="images/plane.png" alt="" />
<img src="images/hotel.png" alt="" />
<img src="images/car.png" alt="" />
</div>

<h1>Heres what we offer!</h1>
<div class="text">
  <div class="left">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio eaque
      id voluptatum iste officia esse beatae corrupti facere dicta sequi a quas
      facilis eos, soluta, maxime voluptate cum nesciunt?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quasi vel
      eius nostrum placeat deleniti, mollitia voluptate nesciunt, molestias unde
      aut deserunt omnis corrupti dolor quibusdam libero, laboriosam sequi
      pariatur?
    </p>
  </div>
  <div class="right">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio eaque
      id voluptatum iste officia esse beatae corrupti facere dicta sequi a quas
      facilis eos, soluta, maxime voluptate cum nesciunt?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quasi vel
      eius nostrum placeat deleniti, mollitia voluptate nesciunt, molestias unde
      aut deserunt omnis corrupti dolor quibusdam libero, laboriosam sequi
      pariatur?
    </p>
  </div>
</div>
<footer>
  <span> travel-Spot </span>
  <img src="images/socials.png" alt="" />
</footer>
</div>`;
var contactContent = `<div class="contact">
<h1>Contact</h1>
<div class="image">
<img src="images/map.png" alt="" />
</div>
<div class="input">
  <input type="text"
placeholder="Phone Number">
<input type="text"
placeholder="Email">
<input type="text"
placeholder="Subject">
<input type="text"
placeholder="Message">
</div>
<div class="button">
<button>Submit</button>
</div>
<footer>
  <span> travel-Spot </span>
  <img src="images/socials.png" alt="" />
</footer>
</div>`;

export var fn = "Tyler";

 export function updateView (pageName) {
    console.log("Model" + pageName);
    var pageContent = pageName;
    $("#app").html(eval(pageContent));
}