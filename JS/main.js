// import Wow from "./JS/wow.js";


// -------- //
// Parallax 
// -------- //

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// Wow Animations //

wow = new Wow({
  mobile: false // <--- Not applicable to mobile scroll settings //
});
wow.init();