// var MODEL = (function () {
//     var _homeContent = `<h1>Home</h1>
// <div class="images">
// <img src="images/canada-tour-01.jpg" alt="" />
// <img src="images/canada-tour-02.jpg" alt="" />
// <img src="images/canada-tour-03.jpg" alt="" />
// </div>
// <p>
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio
//   eaque id voluptatum iste officia esse beatae corrupti facere dicta sequi
//   a quas facilis eos, soluta, maxime voluptate cum nesciunt?
// </p>
// <p>
//   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quasi
//   vel eius nostrum placeat deleniti, mollitia voluptate nesciunt,
//   molestias unde aut deserunt omnis corrupti dolor quibusdam libero,
//   laboriosam sequi pariatur?
// </p>
// <p>
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ut
//   eveniet, porro at neque nesciunt ipsam quibusdam natus consequuntur
//   obcaecati laboriosam, nemo consectetur tenetur pariatur perferendis
//   debitis quasi dolor possimus.
// </p>
// <p>
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
//   nesciunt magni, libero facere totam architecto ipsa cupiditate facilis
//   soluta maxime suscipit quia reiciendis, ullam impedit eaque et voluptas.
//   Optio, delectus.
// </p>
// <p>
//   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem sunt
//   enim ea, minima pariatur labore ipsa esse perspiciatis dignissimos
//   necessitatibus voluptatem ut sit molestiae consequatur, doloribus non
//   quod? Atque, sit.
// </p>`;
// var _aboutContent = `<h1>About</h1>
// <div class="images">
//     <img src="images/france-tour-01.jpg" alt="" />
//     <img src="images/france-tour-02.jpg" alt="" />
//     <img src="images/france-tour-03.jpg" alt="" />
//     </div>
// <p>
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio
//   eaque id voluptatum iste officia esse beatae corrupti facere dicta sequi
//   a quas facilis eos, soluta, maxime voluptate cum nesciunt?
// </p>
// <p>
//   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quasi
//   vel eius nostrum placeat deleniti, mollitia voluptate nesciunt,
//   molestias unde aut deserunt omnis corrupti dolor quibusdam libero,
//   laboriosam sequi pariatur?
// </p>
// <p>
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ut
//   eveniet, porro at neque nesciunt ipsam quibusdam natus consequuntur
//   obcaecati laboriosam, nemo consectetur tenetur pariatur perferendis
//   debitis quasi dolor possimus.
// </p>
// <p>
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
//   nesciunt magni, libero facere totam architecto ipsa cupiditate facilis
//   soluta maxime suscipit quia reiciendis, ullam impedit eaque et voluptas.
//   Optio, delectus.
// </p>
// <p>
//   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem sunt
//   enim ea, minima pariatur labore ipsa esse perspiciatis dignissimos
//   necessitatibus voluptatem ut sit molestiae consequatur, doloribus non
//   quod? Atque, sit.
// </p>`;
// var _productsContent = `<h1>Products</h1>
// <div class="images">
//     <img src="images/isreal-tour1.jpg" alt="" />
//     <img src="images/israel-tour-03.jpg" alt="" />
//     <img src="images/israel-tour-02.jpg" alt="" />
//   </div>
//   <p>
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio
//   eaque id voluptatum iste officia esse beatae corrupti facere dicta sequi
//   a quas facilis eos, soluta, maxime voluptate cum nesciunt?
// </p>
// <p>
//   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quasi
//   vel eius nostrum placeat deleniti, mollitia voluptate nesciunt,
//   molestias unde aut deserunt omnis corrupti dolor quibusdam libero,
//   laboriosam sequi pariatur?
// </p>
// <p>
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ut
//   eveniet, porro at neque nesciunt ipsam quibusdam natus consequuntur
//   obcaecati laboriosam, nemo consectetur tenetur pariatur perferendis
//   debitis quasi dolor possimus.
// </p>
// <p>
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
//   nesciunt magni, libero facere totam architecto ipsa cupiditate facilis
//   soluta maxime suscipit quia reiciendis, ullam impedit eaque et voluptas.
//   Optio, delectus.
// </p>
// <p>
//   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem sunt
//   enim ea, minima pariatur labore ipsa esse perspiciatis dignissimos
//   necessitatibus voluptatem ut sit molestiae consequatur, doloribus non
//   quod? Atque, sit.
// </p>`;
// var _contactContent = `<h1>Contact</h1>
// <div class="images">
// <img src="images/japan-tour-01.jpg" alt="" />
// <img src="images/japan-tour-02.jpg" alt="" />
// <img src="images/japan-tour-03.jpg" alt="" />
// </div>
// <p>
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio
//   eaque id voluptatum iste officia esse beatae corrupti facere dicta sequi
//   a quas facilis eos, soluta, maxime voluptate cum nesciunt?
// </p>
// <p>
//   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quasi
//   vel eius nostrum placeat deleniti, mollitia voluptate nesciunt,
//   molestias unde aut deserunt omnis corrupti dolor quibusdam libero,
//   laboriosam sequi pariatur?
// </p>
// <p>
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ut
//   eveniet, porro at neque nesciunt ipsam quibusdam natus consequuntur
//   obcaecati laboriosam, nemo consectetur tenetur pariatur perferendis
//   debitis quasi dolor possimus.
// </p>
// <p>
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
//   nesciunt magni, libero facere totam architecto ipsa cupiditate facilis
//   soluta maxime suscipit quia reiciendis, ullam impedit eaque et voluptas.
//   Optio, delectus.
// </p>
// <p>
//   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem sunt
//   enim ea, minima pariatur labore ipsa esse perspiciatis dignissimos
//   necessitatibus voluptatem ut sit molestiae consequatur, doloribus non
//   quod? Atque, sit.
// </p>`;


// var _updateView = function (pageName) {
//     console.log("Model " + pageName);
//     var pageContent = "_" + pageName;
//     $("#app").html(eval(pageContent));
// };

//     return{
//         updateView: _updateView,

//     };
// })();