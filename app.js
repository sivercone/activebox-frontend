$(function () {
   // fixed header
   let header = $('#header');
   let intro = $('#intro');
   let nav = $('#nav');
   let nav_toggle = $('#nav_toggle');

   let introHeight = intro.innerHeight();
   let scrollPos = $(window).scrollTop();

   $(window).on('scroll load', function () {
      scrollPos = $(this).scrollTop();

      if (scrollPos > introHeight) {
         header.addClass('header--fixed');
         nav.addClass('nav--fixed');
      } else {
         header.removeClass('header--fixed');
         nav.removeClass('nav--fixed');
      }
   });

   // smooth scroll
   $('[data-scroll]').on('click', function (event) {
      event.preventDefault();

      let elementID = $(this).data('scroll');
      let elementOffset = $(elementID).offset().top;

      nav.removeClass("show");

      //animate
      $('html, body').animate({
         scrollTop: elementOffset - 100, // можно отнять пиксели
      }); // за скобкой указуется время скролинга
   });


   // nav toggle
   nav_toggle.on("click", function (event) {
      event.preventDefault();

      nav.toggleClass("show")
   });

});
