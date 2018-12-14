$(document).ready(function() {

    // size_li = $("#myList .img-wrap").size();
    // x = 3;
    // $('#myList .img-wrap:lt(' + x + ')').show();
    // $('#loadMore').click(function() {
    //     x = (x + 3 <= size_li) ? x + 3 : size_li;
    //     $('#myList .img-wrap:lt(' + x + ')').show();
    // });
    // $('#showLess').click(function() {
    //     x = (x - 3 < 0) ? 3 : x - 3;
    //     $('#myList .img-wrap').not(':lt(' + x + ')').hide();
    // });

    // ==== Tab ====
    $('#myTabs a').on('click', function(e) {
        e.preventDefault();
        $(this).tab('show');
    });



    // ==== Slideshow ====
    $('#tiva-slideshow').nivoSlider({
        effect: 'random',
        animSpeed: 1000,
        pauseTime: 5000,
        directionNav: true,
        controlNav: true,
        pauseOnHover: true
    });

    $('.manufacture-block').owlCarousel({
        rtl: true,
        loop: true,
        margin: 50,
        stopOnHover: false,
        pagination: false,
        paginationNumbers: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
    $('.manufacture-block-portfolio-1').owlCarousel({
        rtl: true,
        loop: true,
        margin: 20,
        stopOnHover: false,
        pagination: false,
        paginationNumbers: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 4,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });



    $('.manufacture-block-customer').owlCarousel({
        rtl: true,
        loop: true,
        margin: 100,
        stopOnHover: false,
        pagination: false,
        paginationNumbers: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 2,
                nav: true,
                loop: false
            }
        }
    });

    $('.manufacture-block-partner').owlCarousel({
        rtl: true,
        slideBy: 5,
        loop: true,
        margin: 0,
        stopOnHover: false,
        pagination: false,
        paginationNumbers: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    });
    $('.manufacture-block-partner-2').owlCarousel({
        rtl: true,
        loop: true,
        margin: 0,
        stopOnHover: false,
        pagination: false,
        paginationNumbers: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

(function() {
    "use strict";



    // $(".img-wrap").slice(0, 4).show();
    // $("#loadMore").on('click', function (e) {
    //     e.preventDefault();
    //     $(".img-wrap:hidden").slice(0, 4).slideDown();
    //     if ($(".img-wrap:hidden").length == 0) {
    //         $("#load").fadeOut('slow');
    //     }
    //     $('html,body').animate({
    //         scrollTop: $(this).offset().top
    //     }, 1500);
    // });


    // ==== Go to top ====
    function go_up() {
        // to top
        $('.go-up').hide();
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 400) {
                $('.go-up').fadeIn();
            } else {
                $('.go-up').fadeOut();
            }

            return false;
        });
        $('.go-up a').on('click', function(e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 600);

            return false;
        });
    }

    // ==== Used to compensante Chrome/Safari bug (they don't care about scroll bar for width) ====
    function scrollCompensate() {
        var inner = document.createElement('p');
        inner.style.width = "100%";
        inner.style.height = "200px";

        var outer = document.createElement('div');
        outer.style.position = "absolute";
        outer.style.top = "0px";
        outer.style.left = "0px";
        outer.style.visibility = "hidden";
        outer.style.width = "200px";
        outer.style.height = "150px";
        outer.style.overflow = "hidden";
        outer.appendChild(inner);

        document.body.appendChild(outer);
        var w1 = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        var w2 = inner.offsetWidth;
        if (w1 == w2) w2 = outer.clientWidth;

        document.body.removeChild(outer);

        return (w1 - w2);
    }

    // ==== Responsive Resize ====
    function responsiveResize() {
        var compensante = scrollCompensate();
        if (($(window).width() + scrollCompensate()) <= 767 && responsiveflag == false) {
            accordion('enable');
            accordionFooter('enable');
            responsiveflag = true;
        } else if (($(window).width() + scrollCompensate()) >= 768) {
            accordion('disable');
            accordionFooter('disable');
            responsiveflag = false;
            if (typeof bindUniform !== 'undefined')
                bindUniform();
        }
    }

    // ==== Accordion Footer ====
    function accordionFooter(status) {
        if (status == 'enable') {
            $('#footer .footer-block h4').on('click', function(e) {
                $(this).toggleClass('active').parent().find('.toggle-footer').stop().slideToggle('medium');
                e.preventDefault();

                return false;
            })
            $('#footer').addClass('accordion').find('.toggle-footer').slideUp('fast');
        } else {
            $('.footer-block h4').removeClass('active').off().parent().find('.toggle-footer').removeAttr('style').slideDown('fast');
            $('#footer').removeClass('accordion');
        }
    }

    // ==== Accordion ====
    function accordion(status) {
        if (status == 'enable') {
            var accordion_selector = '#right_column .block .title_block, #left_column .block .title_block';

            $('#right_column .block .title_block, #left_column .block .title_block').on('click', function(e) {
                $(this).toggleClass('active').parent().find('.block-content').stop().slideToggle('medium');

                return false;
            });
            $('#right_column, #left_column').addClass('accordion').find('.block .block-content').slideUp('fast');
        } else {
            $('#right_column .block .title_block, #left_column .block .title_block').removeClass('active').off().parent().find('.block-content').removeAttr('style').slideDown('fast');
            $('#left_column, #right_column').removeClass('accordion');
        }
    }



    // ==== Document ready ====
    var responsiveflag = false;
    var checkfixed = false;
    $(document).ready(function() {
        go_up();
        responsiveResize();
        $(window).resize(responsiveResize);

        // ==== Create menu for mobile ====
        $('#all').after('<div id="off-mainmenu"><div class="off-mainnav"><div class="off-close"><span class="title">Menu</span><span class="close-menu"><i class="fa fa-close"></i></span></div></div></div>');
        $('.megamenu').clone().appendTo('.off-mainnav');

        $('.off-mainnav .megamenu li.dropdown, .off-mainnav .megamenu li.dropdown-submenu').each(function() {
            $(this).find('a').first().after('<span class="icon-down"><i class="fa fa-angle-down"></i></span>');
        });

        $('#btn-menu').on('click', function(e) {
            e.preventDefault();
            $('body').toggleClass('mainmenu-active');

            return false;
        });

        $('.off-close .close-menu').on('click', function(e) {
            e.preventDefault();
            $('body').removeClass('mainmenu-active');

            return false;
        });

        $('.icon-down').on('click', function(e) {
            $(this).closest('li').find('.dropdown-menu').first().toggleClass('tiva-active');

            return false;
        });

        // ==== Display menu when resize window ====
        $(window).on('resize', function() {
            var win = $(this); //this = window
            if (win.width() >= 1000) {
                $('#main-nav').css({
                    display: 'block'
                });
            }

            return false;
        });

        // ==== Fix menu postion when scroll ====
        $('.btn-fixedheader .no').on('click', function(e) {
            checkfixed = false;
            $('.btn-fixedheader .no').addClass('active');
            $('.btn-fixedheader .yes').removeClass('active');

            return false;
        });

        $('.btn-fixedheader .yes').on('click', function(e) {
            checkfixed = true;
            $('.btn-fixedheader .no').removeClass('active');
            $('.btn-fixedheader .yes').addClass('active');

            return false;
        });
        $(window).on('scroll', function() {
            if (checkfixed) {
                if ($(window).scrollTop() > 120) {
                    $('#top-header').addClass('fixed');
                } else {
                    $('#top-header').removeClass('fixed');
                }
            } else {
                $('#top-header').removeClass('fixed');
            }

            return false;
        });

        // ==== Topbar home-1 ====
        if ($(window).width() < 991) {
            $(".header-topbar .header_user_info").addClass('dropdown-over');
            $(".header-topbar .header_user_info .links").addClass('dropdown-content');
        } else {
            $(".header-topbar .header_user_info").removeClass('dropdown-over');
            $(".header-topbar .header_user_info .links").removeClass('dropdown-content');
        }
        $(window).resize(function() {
            if ($(window).width() < 991) {
                $(".header-topbar .header_user_info").addClass('dropdown-over');
                $(".header-topbar .header_user_info .links").addClass('dropdown-content');
            } else {
                $(".header-topbar .header_user_info").removeClass('dropdown-over');
                $(".header-topbar .header_user_info .links").removeClass('dropdown-content');
            }
        });



        function initialize(latitude, longitude, address, zoom) {
            var latlng = new google.maps.LatLng(latitude, longitude);

            var myOptions = {
                zoom: zoom,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false
            };
            var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
                title: "location : " + address
            });
        }
        // ==== Google Map ====
        var address = jQuery('.contact-address').html();
        var width = '100%';
        var height = '500px';
        var boder = '10px solid #fff';
        var zoom = 16;

        // Create map html
        if (address) {
            $('#map').html('<div id="map_canvas" style="width:' + width + '; height:' + height + '"></div>');

            var geocoder = new google.maps.Geocoder();

            geocoder.geocode({ 'address': address }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();
                    initialize(latitude, longitude, address, zoom);
                }
            });
        }

    }); //end
})()