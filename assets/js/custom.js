/*!
 * Template Marbot 1.0 
 * By @cahuayamarcial - http://marbot.bo - @marbot.bo
 */
jQuery(function($) {
    "use strict";
    // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
    var mainbottom = $('#main').offset().top;
    // on scroll,
    $(window).on('scroll', function() {
        // we round here to reduce a little workload
        // stop = Math.round($(window).scrollTop());
        if ($(window).scrollTop() > 80) {
            $('.navbar').addClass('past-main');
            $('.navbar').addClass('effect-main')
        } else {
            $('.navbar').removeClass('past-main');
        }

    });


    // Collapse navbar on click
    $(document).on('click.nav', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a')) {
            $(this).removeClass('in').addClass('collapse');
            
        }
    });


    $('a.marbot-scroll-trigger[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.marbot-scroll-trigger').on('click', function() {
        $('.navbar-collapse').collapse('hide');
        
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Init WOW.js and get instance
    var wow = new WOW();
    wow.init();
    
    AOS.init();

    $(window).on ('load', function (){
        // Preloader
        $('#ctn-preloader').fadeOut(); 
        $('#preloader').delay(350).fadeOut('slow'); 
        $('body').delay(350).css({'overflow':'visible'});
        // Fancybox
        var fancy = $ (".fancybox");
        if(fancy.length) {
            fancy.fancybox({
                arrows: true,
                buttons: [
                    "zoom",
                    //"share",
                    "slideShow",
                    //"fullScreen",
                    //"download",
                    "thumbs",
                    "close"
                ],
                animationEffect: "zoom-in-out",
                transitionEffect: "zoom-in-out",
            });
        }
    });



    // Works

    $(document).on ('ready', function (){

        // Menu
        $('#nav-marbot-hamburger').click(function() {
            $(this).toggleClass('open').siblings().removeClass('open');
            if ($('#btnMenu').attr('aria-expanded') == "true") {
                $('.navbar').removeClass('border-navbar')
            } else {
                $('.navbar').addClass('border-navbar')
            }
        });

        // Gallery Slider
        var tSlider = $ (".gallery-slider");
        if(tSlider.length) {
            tSlider.owlCarousel({
              loop:true,
              nav:true,
              navText: ["<i class='flaticon-back'></i>" , "<i class='flaticon-next'></i>"],
            // navText: ["<i class='flaticon-back'><-</i>" , "<i class='flaticon-next'>-></i>"],
              dots:false,
              autoplay:true,
              autoplayTimeout:4000,
              smartSpeed:1200,
              autoplayHoverPause:true,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1100:{
                        items:3
                    },
                    1550:{
                        items:4,
                    }
                },
          });
        }
    });

});

