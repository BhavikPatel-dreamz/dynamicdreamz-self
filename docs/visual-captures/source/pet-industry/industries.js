var $ = jQuery;
jQuery(document).ready(function () {

    setTimeout(function () {
        $('.our-client-sec .wrapper').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: false,
                  },
              },
            ],
        });
    }, 3000);

    jQuery(document).ready(function($){
      let slider = $('.owl-carousel');
      slider.each(function () {
        $(this).owlCarousel({
          nav: false,
          loop:false,
          dots: false,
          pagination: false,
          margin: 16,
          autoHeight: false,
          stagePadding: 50,
          responsive:{
            0:{
              items: 1,
               stagePadding: 25,
              margin: 10,
              dots: true,
            },
            767:{
              items: 2,
              stagePadding: 25,
            },
            1200:{
              items: 3,
              stagePadding: 0,
            }
          }
        });
      });
    });

});


