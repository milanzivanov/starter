'use strict'
$(document).ready(function($) {
    $(".mdi-menu-down, .mdi-plus").on("click", function(){
        alert("radi!!!");
        console.log("radi ili ne");
    });
    // first drop level
    $(".nav ul li a").on('click', function() {
        $(".sub").toggleClass('open');
        $(this).has("span:first-child").toggleClass("active");
    });
});


// $(function() {
//   $('.accordian_button').on('click', function(e) {
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
// });
