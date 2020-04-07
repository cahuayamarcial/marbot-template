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


    // jQuery for Easing min
    (function($) {
        "use strict";
        // Smooth scrolling using jQuery easing
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

    })(jQuery); // End of use strict


    // Helper function for add element box list in WOW
    // WOW.prototype.addBox = function(element) {
    //     this.boxes.push(element);
    // };

    // Init WOW.js and get instance
    var wow = new WOW();
    wow.init();

    // Attach scrollSpy to .wow elements for detect view exit events,
    // then reset elements and add again for animation
    // $('.wow').on('scrollSpy:exit', function() {
    //     $(this).css({
    //         'visibility': 'hidden',
    //         'animation-name': 'none'
    //     }).removeClass('animated');
    //     wow.addBox(this);
    // }).scrollSpy();

    // Initial Page
    $(document).ready(function() {
        // Menu
        $('#nav-marbot-hamburger').click(function() {
            $(this).toggleClass('open')
            if ($('#btnMenu').attr('aria-expanded') === "true") {
                $('.navbar').removeClass('border-navbar')
            } else {
                $('.navbar').addClass('border-navbar')
            }
        });

    });

});
