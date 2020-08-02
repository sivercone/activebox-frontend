$(function() 
{
    // fixed header
    let header = $("#header");
    let intro = $("#intro");
    let nav = $("#nav");

    let introHeight = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load", function() {
        scrollPos = $(this).scrollTop();

        if(scrollPos > introHeight)
        {
            header.addClass("header--fixed");
            nav.addClass("nav--fixed");
        }
        else
        {
            header.removeClass("header--fixed");
            nav.removeClass("nav--fixed");
        }
    });

    // smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        //animate
        $("html, body").animate({
            scrollTop: elementOffset -100 // можно отнять пиксели
        }) // за скобкой указуется время скролинга
    });
    

    
    
});

// slider [ https://swiperjs.com/get-started/ ]
var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
  });