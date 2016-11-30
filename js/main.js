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

  // custom select niceSelect
  $('select').niceSelect();


  // $(function() {
  //   // dropdown menu firs level
  //   $('.sub li a').on('click', function(e) {
  //     //$(".sub").toggleClass('open');
  //     e.preventDefault();
  //     if ($(this).hasClass('active')) {
  //       $(this).removeClass('active');
  //       $(this).next()
  //       .stop()
  //       .slideUp(300);
  //     } else {
  //       $(this).addClass('active');
  //       $(this).next()
  //       .stop()
  //       .slideDown(300);
  //     }
  //   });
  //
  // });



});

// loader
(function() {
   // $('.k-loading-mask').css('display', 'block !important');
   $(".is-active").show();
   setTimeout(function () {
      //test();
      $('.is-active').hide();
   }, 4000);
})();
