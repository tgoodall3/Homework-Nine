import * as MODEL from "./model-module.js";

// import { updateView, fn } from "./model-module";

function initListeners() {
    $("nav a").click(function (e) {
        // this stores Id from a Tag
      let aID = e.currentTarget.id;
      let contentID = aID + "Content";

        MODEL.updateView(contentID);
        console.log(MODEL.fn); 
    });
}

$(document).ready(function ()  {
       initListeners();
     MODEL.updateView("homeContent");
});   