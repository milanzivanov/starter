'use strict'
$(document).ready(function($) {
    $(".mdi-menu-down, .mdi-plus").on("click", function(){
        alert("radi!!!");
        console.log("radi ili ne");
    });
    // first drop level
    $(".nav ul li a").on('click', function() {
        //$(".sub").toggleClass('open');
        // $(this).has("span:first-child").toggleClass("active");
    });
});


$(function() {
  // dropdown menu firs level
  $('.nav ul li a').on('click', function(e) {
    //$(".sub").toggleClass('open');
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next()
      .stop()
      .slideUp(300);
    } else {
      $(this).addClass('active');
      $(this).next()
      .stop()
      .slideDown(300);
    }
  });



});

// custom select
//Executes your code when the DOM is ready.  Acts the same as $(document).ready().
  $(function() {
    //Calls the selectBoxIt method on your HTML select box.
    $("select").selectBoxIt({
      showEffect: "fadeIn",
      downArrowIcon: "mdi mdi-chevron-down mdi-24px"


    });
  });
