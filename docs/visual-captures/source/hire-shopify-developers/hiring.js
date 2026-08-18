var $ = jQuery;
jQuery(document).ready(function () {

    /* Youtube Popup JS */
/*     jQuery(".popup-youtube").magnificPopup({
        type: "iframe",
        iframe: {
            patterns: {
                youtube: {
                    index: "youtube.com/",
                    id: "v=",
                    src: "https://www.youtube.com/embed/%id%?autoplay=1?rel=0",
                },
            },
        },
        callbacks: {
            open: function () {
                jQuery("body").addClass("overflow-hidden");
            },
            close: function () {
                jQuery("body").removeClass("overflow-hidden");
            },
        },
    }); */
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
        let slider = $('.owl-carousel.happy-client-slider');
        slider.each(function () {
          $(this).owlCarousel({
            nav: false,
            loop:false,
            dots: false,
            pagination: false,
            margin: 25,
            autoHeight: false,
            stagePadding: 50,
            responsive:{
              0:{
                items: 1,
                stagePadding: 25,
                margin: 10,
              },
              767:{
                items: 2,
                stagePadding: 25,
              },
              1200:{
                items: 2,
                stagePadding: 25,
              }
            }
          });
        });
      });

      jQuery(document).ready(function($){
        let slider = $('.owl-carousel.industries-carousel');
        slider.each(function () {
          $(this).owlCarousel({
            nav: false,
            loop:false,
            dots: false,
            pagination: false,
            margin: 20,
            autoHeight: false,
            stagePadding: 50,
            responsive:{
              0:{
                items: 1,
                stagePadding: 25,
              },
              992:{
                items: 2,
                stagePadding: 30,
              }
            }
          });
        });
      });  

    setTimeout(function () {
        jQuery(document).on('click', '.accrodion-title', function () {
            jQuery('.accrodion-item').removeClass('active');
            jQuery('.accrodion-content').slideUp();
            if (jQuery(this).next().is(":visible")) {
                jQuery(this).removeClass('active');
                jQuery(this).next().slideUp();
            } else {
                jQuery(this).parent().addClass('active');
                jQuery(this).next().slideDown();
            }
        });
    }, 1200);
});